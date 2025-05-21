import { expect } from "chai";
import { ethers } from "hardhat";

describe("GivingCircle", function () {
  let GivingCircle;
  let givingCircle: any;
  let owner: any;
  let addr1: any;
  let addr2: any;

  beforeEach(async function () {
    [owner, addr1, addr2] = await ethers.getSigners();

    GivingCircle = await ethers.getContractFactory("GivingCircle");
    givingCircle = await GivingCircle.deploy();
  });

  describe("Deployment", function () {
    it("Should set the correct owner", async function () {
      expect(await givingCircle.owner()).to.equal(owner.address);
    });

    it("Should have totalContributions initialized to 0", async function () {
      expect(await givingCircle.getTotalContributions()).to.equal(0);
    });
  });

  describe("Contributions", function () {
    it("Should allow users to contribute", async function () {
      const contributionAmount = ethers.parseEther("1");
      await givingCircle
        .connect(addr1)
        .contribute({ value: contributionAmount });
      expect(await givingCircle.getTotalContributions()).to.equal(
        contributionAmount
      );

      const contributionAmount2 = ethers.parseEther("0.5");
      await givingCircle
        .connect(addr2)
        .contribute({ value: contributionAmount2 });
      expect(await givingCircle.getTotalContributions()).to.equal(
        contributionAmount + contributionAmount2
      );
    });

    it("Should emit Contribution event on contribution", async function () {
      const contributionAmount = ethers.parseEther("1");
      await expect(
        givingCircle.connect(addr1).contribute({ value: contributionAmount })
      )
        .to.emit(givingCircle, "Contribution")
        .withArgs(addr1.address, contributionAmount);
    });

    it("Should reject contributions of zero value", async function () {
      await expect(
        givingCircle.connect(addr1).contribute({ value: 0 })
      ).to.be.revertedWith("Contribution must be greater than zero");
    });
  });

  describe("Withdrawals", function () {
    it("Should allow the owner to withdraw all contributions", async function () {
      const contributionAmount1 = ethers.parseEther("1");
      await givingCircle
        .connect(addr1)
        .contribute({ value: contributionAmount1 });

      const contributionAmount2 = ethers.parseEther("0.5");
      await givingCircle
        .connect(addr2)
        .contribute({ value: contributionAmount2 });

      const initialOwnerBalance = await ethers.provider.getBalance(
        owner.address
      );
      const total = contributionAmount1 + contributionAmount2;

      await givingCircle.connect(owner).withdrawAll();

      const finalOwnerBalance = await ethers.provider.getBalance(owner.address);

      // Check that the owner's balance increased by roughly the total contributions
      // We use be.closeTo because of gas costs
      expect(finalOwnerBalance).to.be.closeTo(
        initialOwnerBalance + total,
        ethers.parseEther("0.01")
      );
      expect(await givingCircle.getTotalContributions()).to.equal(0);
    });

    it("Should prevent non-owners from withdrawing", async function () {
      const contributionAmount = ethers.parseEther("1");
      await givingCircle
        .connect(addr1)
        .contribute({ value: contributionAmount });

      await expect(
        givingCircle.connect(addr1).withdrawAll()
      ).to.be.revertedWith("Only the owner can call this function");
    });

    it("Should prevent withdrawal if no contributions", async function () {
      await expect(
        givingCircle.connect(owner).withdrawAll()
      ).to.be.revertedWith("No contributions to withdraw");
    });
  });
});
