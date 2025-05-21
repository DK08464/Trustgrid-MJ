import { ethers } from "hardhat";

async function main() {
  const GivingCircle = await ethers.getContractFactory("GivingCircle");
  const givingCircle = await GivingCircle.deploy();

  console.log(`GivingCircle deployed to: ${givingCircle.target}`);
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
