// const { expect } = require("chai");
// const { loadFixture } = require("@nomicfoundation/hardhat-network-helpers");
// const { ethers } = require("hardhat");

// describe('Person', () => {

//     async function deployPersonFixture() {
//         const [deployer] = await ethers.getSigners();
//         const Person = await ethers.getContractFactory("Person");
//         const hardhatPerson = await Person.deploy();

//         await hardhatPerson.deployed();

//         return { Person, hardhatPerson };
//     }
//     describe('setName ', () => {
//         it("set name and get name", async function () {
//             const { hardhatPerson } = await loadFixture(deployPersonFixture);
//             await hardhatPerson.setName(ethers.utils.formatBytes32String("Umbo"));
//             const name = await hardhatPerson.name();
//             const nameParse = ethers.utils.parseBytes32String(name);
//             expect(nameParse).to.be.not.undefined;
//             expect(nameParse).to.be.not.null;
//             expect(nameParse).to.be.not.equal("");
//             expect(nameParse).to.be.equal("Umbo")
//         })
//     })
    

// })
