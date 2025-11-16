#[test_only]
module datayieldnft::datayieldnft_tests;

use datayieldnft::datayieldnft::{Self, DataNFT, AccessKey};
use sui::test_scenario;
use sui::object;
use std::vector;

const CREATOR: address = @0xA;
const USER1: address = @0xB;

#[test]
fun test_mint_and_portfolio() {
    let mut scenario = test_scenario::begin(CREATOR);
    {
        let ctx = test_scenario::ctx(&mut scenario);
        let nft = datayieldnft::mint_dy_nft(
            b"Test NFT",
            b"Description",
            b"blob_id",
            b"seal_key",
            100, // access_price
            3,   // num_keys
            ctx
        );
        sui::transfer::public_transfer(nft, CREATOR);
    };

    test_scenario::next_tx(&mut scenario, CREATOR);
    {
        let nft = test_scenario::take_from_sender<DataNFT>(&scenario);
        let portfolio = datayieldnft::get_user_portfolio(CREATOR, &nft);
        assert!(vector::length(&portfolio) == 3, 0); // Should have 3 keys
        test_scenario::return_to_sender(&scenario, nft);
    };

    test_scenario::end(scenario);
}
