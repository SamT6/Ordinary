// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.9;

import "@openzeppelin/contracts/utils/cryptography/SignatureChecker.sol";

contract Event {
    address public owner;
    string name;
    string description;
    mapping(address => bool) public participants;
    mapping(uint => address[]) public teams; // teamid to [team leader + team members]
    uint teamCounter;
    
    constructor(string memory _name, string memory _description, address _owner){
        name = _name;
        description = _description;
        owner = _owner;
        teamCounter = 0;
    }

    function signup() public {
        participants[msg.sender] = true;
    }

    function createTeam() public {
        teams[teamCounter].push(msg.sender);
        teamCounter += 1;
    }

    // team leader generate signature to allow members to join their team
    function joinTeam(uint teamid, bytes32 messageHash, bytes memory signature) public {
        if(SignatureChecker.isValidSignatureNow(teams[teamid][0], messageHash, signature)){
            teams[teamid].push(msg.sender);
        }
    }
}