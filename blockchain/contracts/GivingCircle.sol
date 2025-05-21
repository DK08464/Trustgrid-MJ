// SPDX-License-Identifier: MIT
pragma solidity ^0.8.24;

contract GivingCircle {
    address payable public owner;
    uint256 public totalContributions;

    event Contribution(address indexed contributor, uint256 amount);

    constructor() {
        owner = payable(msg.sender);
        totalContributions = 0;
    }

    function contribute() public payable {
        require(msg.value > 0, "Contribution must be greater than zero");
        totalContributions += msg.value;
        emit Contribution(msg.sender, msg.value);
    }

    // Function to get the total contributions
    function getTotalContributions() public view returns (uint256) {
        return totalContributions;
    }

    // Basic withdrawal function (can be refined later for specific use cases)
    function withdrawAll() public onlyOwner {
        require(totalContributions > 0, "No contributions to withdraw");
        (bool success, ) = owner.call{value: totalContributions}("");
        require(success, "Withdrawal failed");
        totalContributions = 0; // Reset after withdrawal
    }

    // Modifier to restrict functions to the owner
    modifier onlyOwner() {
        require(msg.sender == owner, "Only the owner can call this function");
        _;
    }
} 