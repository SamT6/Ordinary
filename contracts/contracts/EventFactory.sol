// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.9;

// Import the Event contract
import "./Event.sol";

contract EventFactory {
    mapping(address => address[]) public events;

    function createEvent(string memory _name, string memory _description) public {
        Event newEvent = new Event(_name, _description, msg.sender);

        events[msg.sender].push(address(newEvent));
    }
}
