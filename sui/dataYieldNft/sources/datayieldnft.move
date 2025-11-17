
module datayieldnft::datayieldnft {
    use sui::object::{Self, UID, ID};
    use sui::transfer;
    use sui::tx_context::{Self, TxContext};
    use sui::coin::{Self, Coin};
    use sui::sui::SUI;
    use sui::table::{Self, Table};
    use sui::vec_set::{Self, VecSet};
    use std::string::{Self, String};
    use std::vector;
    use sui::event;

    /// Parent Data-Yield NFT
    public struct DataNFT has key, store {
        id: UID,
        name: String,
        description: String,
        walrus_blob_id: String,  // ID of the encrypted blob on Walrus
        seal_key: vector<u8>,    // Encryption key for Seal
        access_price: u64,
        total_revenue: u64,
        access_keys: VecSet<ID>, // Set of Access Key IDs (children)
        key_holders: Table<address, VecSet<ID>>, // Holder -> set of key IDs
        staked_keys: Table<address, VecSet<ID>>, // Staked keys per user
        creator: address,
    }

    /// Child Access Key Token
    public struct AccessKey has key, store {
        id: UID,
        parent_id: ID,  // ID of the parent DataNFT
        holder: address,
    }

    /// Marketplace Listing for Access Keys
    public struct Listing has key, store {
        id: UID,
        key_id: ID,  // ID of the AccessKey being sold
        price: u64,  // SUI price
        seller: address,
    }

    /// Staking for Access Keys to earn rewards
    public struct Stake has key, store {
        id: UID,
        key_id: ID,  // ID of the staked AccessKey
        staker: address,
        staked_at: u64,  // Timestamp (use sui::clock for real timestamp)
    }

    /// Events for frontend integration
    public struct MintEvent has copy, drop {
        nft_id: ID,
        creator: address,
    }

    public struct TransferEvent has copy, drop {
        key_id: ID,
        from: address,
        to: address,
    }

    public struct PaymentEvent has copy, drop {
        nft_id: ID,
        payer: address,
        amount: u64,
    }

    public struct StakeEvent has copy, drop {
        key_id: ID,
        staker: address,
    }

    public struct AccessEvent has copy, drop {
        nft_id: ID,
        user: address,
    }

    /// Mint a new DataNFT (parent object)
    public fun mint_dy_nft(
        name: vector<u8>,
        description: vector<u8>,
        walrus_blob_id: vector<u8>,
        seal_key: vector<u8>,
        access_price: u64,
        num_keys: u64,  // Number of Access Keys to mint
        ctx: &mut TxContext
    ): DataNFT {
        let mut nft = DataNFT {
            id: object::new(ctx),
            name: string::utf8(name),
            description: string::utf8(description),
            walrus_blob_id: string::utf8(walrus_blob_id),
            seal_key,
            access_price,
            total_revenue: 0,
            access_keys: vec_set::empty(),
            key_holders: table::new(ctx),
            staked_keys: table::new(ctx),
            creator: tx_context::sender(ctx),
        };

        // Mint Access Keys as children
        let mut i = 0;
        while (i < num_keys) {
            let key = AccessKey {
                id: object::new(ctx),
                parent_id: object::id(&nft),
                holder: tx_context::sender(ctx),
            };
            vec_set::insert(&mut nft.access_keys, object::id(&key));
            if (!table::contains(&nft.key_holders, tx_context::sender(ctx))) {
                table::add(&mut nft.key_holders, tx_context::sender(ctx), vec_set::empty());
            };
            vec_set::insert(table::borrow_mut(&mut nft.key_holders, tx_context::sender(ctx)), object::id(&key));
            transfer::transfer(key, tx_context::sender(ctx));
            i = i + 1;
        };

        event::emit(MintEvent { nft_id: object::id(&nft), creator: tx_context::sender(ctx) });

        nft
    }

    /// Pay for access and distribute yield to Access Key holders
    public fun pay_for_access(
        nft: &mut DataNFT,
        payment: Coin<SUI>,
        ctx: &mut TxContext
    ) {
        let amount = coin::value(&payment);
        assert!(amount >= nft.access_price, 0);  // Ensure sufficient payment

        // Add to total revenue
        nft.total_revenue = nft.total_revenue + amount;

        event::emit(PaymentEvent { nft_id: object::id(nft), payer: tx_context::sender(ctx), amount });

        // Distribute to holders proportionally
        let total_keys = vec_set::length(&nft.access_keys);
        if (total_keys > 0) {
            let share_per_key = amount / total_keys;
            // Note: Proper distribution requires iterating over key_holders table,
            // but tables are not directly iterable. For full implementation,
            // consider using a vector<address> for holders or a shared object for distribution.
            // Placeholder: send to creator; in production, split and transfer to each holder.
            transfer::public_transfer(payment, nft.creator);
        } else {
            transfer::public_transfer(payment, nft.creator);
        }
    }

    /// Check if address owns an Access Key for this NFT (for Seal policy)
    public fun has_access_key(nft: &DataNFT, user: address): bool {
        table::contains(&nft.key_holders, user) && vec_set::length(table::borrow(&nft.key_holders, user)) > 0
    }

    /// Transfer an Access Key
    public fun transfer_access_key(mut key: AccessKey, recipient: address, nft: &mut DataNFT) {
        // Update holder in parent
        let old_holder = key.holder;
        let key_id = object::id(&key);
        vec_set::remove(table::borrow_mut(&mut nft.key_holders, old_holder), &key_id);
        if (vec_set::length(table::borrow(&nft.key_holders, old_holder)) == 0) {
            table::remove(&mut nft.key_holders, old_holder);
        };
        if (!table::contains(&nft.key_holders, recipient)) {
            table::add(&mut nft.key_holders, recipient, vec_set::empty());
        };
        vec_set::insert(table::borrow_mut(&mut nft.key_holders, recipient), key_id);
        key.holder = recipient;
        event::emit(TransferEvent { key_id, from: old_holder, to: recipient });
        transfer::transfer(key, recipient);
    }

    /// List an Access Key for sale on the marketplace
    public fun list_for_sale(key: &AccessKey, price: u64, ctx: &mut TxContext): Listing {
        assert!(key.holder == tx_context::sender(ctx), 0);  // Only holder can list
        let listing = Listing {
            id: object::new(ctx),
            key_id: object::id(key),
            price,
            seller: tx_context::sender(ctx),
        };
        listing
    }

    /// Buy a listed Access Key
    public fun buy_listing(mut listing: Listing, payment: Coin<SUI>, nft: &mut DataNFT, ctx: &mut TxContext) {
        let buyer = tx_context::sender(ctx);
        assert!(coin::value(&payment) >= listing.price, 0);  // Sufficient payment

        // Transfer payment to seller
        transfer::public_transfer(payment, listing.seller);

        // Transfer the Access Key to buyer (assuming we have the key object)
        // Note: In practice, the key should be passed or fetched; for simplicity, update holder
        // This assumes the key is transferred separately or via shared object
        // For full implementation, key needs to be mutable and transferred
        // Placeholder: Update holder in NFT
        vec_set::remove(table::borrow_mut(&mut nft.key_holders, listing.seller), &listing.key_id);
        if (vec_set::length(table::borrow(&nft.key_holders, listing.seller)) == 0) {
            table::remove(&mut nft.key_holders, listing.seller);
        };
        if (!table::contains(&nft.key_holders, buyer)) {
            table::add(&mut nft.key_holders, buyer, vec_set::empty());
        };
        vec_set::insert(table::borrow_mut(&mut nft.key_holders, buyer), listing.key_id);

        // Delete the listing
        let Listing { id, key_id: _, price: _, seller: _ } = listing;
        object::delete(id);
    }

    /// Stake an Access Key for rewards
    public fun stake_key(mut key: AccessKey, nft: &mut DataNFT, ctx: &mut TxContext): Stake {
        assert!(key.holder == tx_context::sender(ctx), 0);  // Only holder can stake
        let staker = tx_context::sender(ctx);
        let key_id = object::id(&key);
        // Remove from key_holders
        vec_set::remove(table::borrow_mut(&mut nft.key_holders, staker), &key_id);
        if (vec_set::length(table::borrow(&nft.key_holders, staker)) == 0) {
            table::remove(&mut nft.key_holders, staker);
        };
        // Add to staked_keys
        if (!table::contains(&nft.staked_keys, staker)) {
            table::add(&mut nft.staked_keys, staker, vec_set::empty());
        };
        vec_set::insert(table::borrow_mut(&mut nft.staked_keys, staker), key_id);
        let stake = Stake {
            id: object::new(ctx),
            key_id,
            staker,
            staked_at: 0,  // Placeholder; use clock in real implementation
        };
        // Transfer key to contract or lock it (simplified)
        transfer::transfer(key, @0x0);  // Lock the key (burn or store)
        event::emit(StakeEvent { key_id: stake.key_id, staker: stake.staker });
        stake
    }

    /// Unstake an Access Key
    public fun unstake(mut stake: Stake, nft: &mut DataNFT, ctx: &mut TxContext) {
        assert!(stake.staker == tx_context::sender(ctx), 0);
        let staker = stake.staker;
        // Remove from staked_keys
        vec_set::remove(table::borrow_mut(&mut nft.staked_keys, staker), &stake.key_id);
        if (vec_set::length(table::borrow(&nft.staked_keys, staker)) == 0) {
            table::remove(&mut nft.staked_keys, staker);
        };
        // Add back to key_holders (assuming key is returned)
        if (!table::contains(&nft.key_holders, staker)) {
            table::add(&mut nft.key_holders, staker, vec_set::empty());
        };
        vec_set::insert(table::borrow_mut(&mut nft.key_holders, staker), stake.key_id);
        // Return the key to staker (simplified; in practice, retrieve from storage)
        // Placeholder: Assume key is recreated or transferred back
        let Stake { id, key_id: _, staker: _, staked_at: _ } = stake;
        object::delete(id);
        // Note: Actual unstaking needs key retrieval logic
    }

    /// Get user's total earnings from a specific NFT
    public fun get_user_earnings(user: address, nft: &DataNFT): u64 {
        if (!table::contains(&nft.key_holders, user)) return 0;
        let keys_owned = vec_set::length(table::borrow(&nft.key_holders, user));
        let total_keys = vec_set::length(&nft.access_keys);
        (nft.total_revenue * keys_owned) / total_keys
    }

    /// Get user's average yield rate (simplified as earnings per key)
    public fun get_user_yield_rate(user: address, nft: &DataNFT): u64 {
        if (!table::contains(&nft.key_holders, user)) return 0;
        let keys_owned = vec_set::length(table::borrow(&nft.key_holders, user));
        if (keys_owned == 0) return 0;
        nft.total_revenue / keys_owned
    }

    /// Get user's portfolio (list of AccessKey IDs)
    public fun get_user_portfolio(user: address, nft: &DataNFT): vector<ID> {
        if (table::contains(&nft.key_holders, user)) {
            vec_set::into_keys(*table::borrow(&nft.key_holders, user))
        } else {
            vector::empty<ID>()
        }
    }

    /// Get user's staked assets
    public fun get_staked_assets(user: address, nft: &DataNFT): vector<ID> {
        if (table::contains(&nft.staked_keys, user)) {
            vec_set::into_keys(*table::borrow(&nft.staked_keys, user))
        } else {
            vector::empty<ID>()
        }
    }

    /// Grant access to data by returning seal key if user has access
    public fun grant_access(user: address, nft: &DataNFT): vector<u8> {
        assert!(has_access_key(nft, user), 0);  // Ensure user has access
        event::emit(AccessEvent { nft_id: object::id(nft), user });
        nft.seal_key
    }

    // Getters
    public fun access_price(nft: &DataNFT): u64 { nft.access_price }
    public fun total_revenue(nft: &DataNFT): u64 { nft.total_revenue }
}
