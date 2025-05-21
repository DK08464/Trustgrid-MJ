import { ethers } from "hardhat";

async function main() {
  // Get the deployer account
  const [deployer] = await ethers.getSigners();

  console.log("Deploying contracts with the account:", deployer.address);

  const CharityPlatform = await ethers.getContractFactory("CharityPlatform");
  const charityPlatform = await CharityPlatform.deploy(deployer.address);

  console.log(`CharityPlatform deployed to: ${charityPlatform.target}`);
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
