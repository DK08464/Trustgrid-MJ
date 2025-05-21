import { ethers } from "hardhat";

async function main() {
  const contractAddress = "0x5FbDB2315678afecb367f032d93F642f64180aa3"; // Your deployed CharityPlatform address
  const CharityPlatform = await ethers.getContractFactory("CharityPlatform");
  const charityPlatform = CharityPlatform.attach(contractAddress);

  // Get the deployer account (owner) and other accounts for beneficiaries
  const [
    owner,
    beneficiary1,
    beneficiary2,
    beneficiary3,
    beneficiary4,
    beneficiary5,
    beneficiary6,
  ] = await ethers.getSigners();

  const charitiesToAdd = [
    { id: "clean-water", beneficiary: beneficiary1.address },
    { id: "global-education", beneficiary: beneficiary2.address },
    { id: "medical-relief", beneficiary: beneficiary3.address },
    { id: "refugee-support", beneficiary: beneficiary4.address },
    { id: "climate-action", beneficiary: beneficiary5.address },
    { id: "animal-welfare", beneficiary: beneficiary6.address },
  ];

  console.log("Adding charities to the CharityPlatform contract...");

  for (const charity of charitiesToAdd) {
    try {
      // Connect with the owner account to call addCharity
      const connectedContract = charityPlatform.connect(owner);
      const tx = await connectedContract.addCharity(
        charity.id,
        charity.beneficiary
      );
      await tx.wait();
      console.log(
        `Charity "${charity.id}" added with beneficiary ${charity.beneficiary}`
      );
    } catch (error: any) {
      // Check if the error is due to the charity already existing
      if (error.message.includes("Charity with this ID already exists")) {
        console.log(`Charity "${charity.id}" already exists. Skipping.`);
      } else {
        console.error(`Error adding charity "${charity.id}":`, error);
      }
    }
  }

  console.log("Finished adding charities.");
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
