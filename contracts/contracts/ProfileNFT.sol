// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.9;

import "@openzeppelin/contracts/token/ERC721/ERC721.sol";

contract ProfileNFT is ERC721("ProfileNFT", "PRO"){
    uint tokenId;
    mapping(address => tokenMetaData[]) public ownershipRecord;
    
    struct tokenMetaData{
        uint tokenId;
        uint timeStamp;
        string cid;
    }

    function mintToken(address recipient, string memory cid) public {        
        _safeMint(recipient, tokenId);
        ownershipRecord[recipient].push(tokenMetaData(tokenId, block.timestamp, cid));
        tokenId = tokenId + 1;
    }
}