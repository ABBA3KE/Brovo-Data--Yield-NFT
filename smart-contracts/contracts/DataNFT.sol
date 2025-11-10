// SPDX-License-Identifier: MIT
pragma solidity ^0.8.17;

import "@openzeppelin/contracts/token/ERC721/extensions/ERC721URIStorage.sol";
import "@openzeppelin/contracts/access/Ownable.sol";

contract DataNFT is ERC721URIStorage, Ownable {
    uint256 public tokenCounter;

    constructor() ERC721("DataYieldNFT", "DYNFT") {
        tokenCounter = 1;
    }

    function mintDataNFT(address to, string memory tokenURI) external onlyOwner returns (uint256) {
        uint256 tokenId = tokenCounter;
        _safeMint(to, tokenId);
        _setTokenURI(tokenId, tokenURI);
        tokenCounter++;
        return tokenId;
    }
}
