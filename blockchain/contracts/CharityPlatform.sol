// SPDX-License-Identifier: MIT
pragma solidity ^0.8.24;

import "@openzeppelin/contracts/access/Ownable.sol";

contract CharityPlatform is Ownable {
    struct Charity {
        address payable beneficiary;
        uint256 totalRaised;
        bool exists; // To check if a charity ID is valid
    }

    // Mapping from charity ID to Charity struct
    mapping(string => Charity) public charities;

    // Array to store charity IDs (for iteration, if needed, though mappings are better for direct access)
    string[] public charityIds;

    event CharityAdded(string indexed charityId, address indexed beneficiary);
    event DonationReceived(string indexed charityId, address indexed donor, uint256 amount);
    event FundsWithdrawn(string indexed charityId, address indexed beneficiary, uint256 amount);

    constructor(address initialOwner) Ownable(initialOwner) {}

    // Function to add a new charity (only callable by the contract owner)
    function addCharity(string memory _charityId, address payable _beneficiary) public onlyOwner {
        require(!charities[_charityId].exists, "Charity with this ID already exists");

        charities[_charityId] = Charity({
            beneficiary: _beneficiary,
            totalRaised: 0,
            exists: true
        });
        charityIds.push(_charityId);

        emit CharityAdded(_charityId, _beneficiary);
    }

    // Function for users to donate to a specific charity
    function donateToCharity(string memory _charityId) public payable {
        require(charities[_charityId].exists, "Charity does not exist");
        require(msg.value > 0, "Donation amount must be greater than zero");

        charities[_charityId].totalRaised += msg.value;

        emit DonationReceived(_charityId, msg.sender, msg.value);
    }

    // Function for the charity beneficiary to withdraw funds
    function withdrawCharityFunds(string memory _charityId) public {
        require(charities[_charityId].exists, "Charity does not exist");
        // Ensure the caller is the designated beneficiary for this charity
        require(msg.sender == charities[_charityId].beneficiary, "Only the charity beneficiary can withdraw");
        require(charities[_charityId].totalRaised > 0, "No funds to withdraw");

        uint256 amountToWithdraw = charities[_charityId].totalRaised;
        charities[_charityId].totalRaised = 0; // Reset before sending to prevent reentrancy

        (bool success, ) = charities[_charityId].beneficiary.call{value: amountToWithdraw}("");
        require(success, "Withdrawal failed");

        emit FundsWithdrawn(_charityId, charities[_charityId].beneficiary, amountToWithdraw);
    }

    // Function to get the total raised for a specific charity
    function getCharityTotalContributions(string memory _charityId) public view returns (uint256) {
        require(charities[_charityId].exists, "Charity does not exist");
        return charities[_charityId].totalRaised;
    }

    // Optional: Function to get all charity IDs (can be costly for many charities)
    function getAllCharityIds() public view returns (string[] memory) {
        return charityIds;
    }
} 