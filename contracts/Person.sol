// SPDX-License-Identifier: MIT
pragma solidity 0.8.19;

contract Person {
    bytes32 public surname;
    bytes32 public name;
    bytes32 public city;
    uint32 public age;
    address private owner;

    constructor() {
        owner = msg.sender;
    }

    function setName(bytes32 _name) public onlyOwner {
        name = _name;
    }

    function setCity(bytes32 _city) public onlyOwner {
        city = _city;
    }

    function setSurname(bytes32 _surname) public onlyOwner {
        surname = _surname;
    }

    function setAge(uint32 _age) public onlyOwner {
        age = _age;
    }

    modifier onlyOwner() {
        require(msg.sender == owner, "Not owner");
        _;
    }
}
