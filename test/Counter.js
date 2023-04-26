const { expect } = require("chai");
const { loadFixture } = require("@nomicfoundation/hardhat-network-helpers");
const { ethers } = require("hardhat");

describe('Counter', () => {

    async function deployCounterFixture() {
        const Counter = await ethers.getContractFactory("Counter");
        const hardhatCounter = await Counter.deploy();

        await hardhatCounter.deployed();

        return { Counter, hardhatCounter };
    }
    describe('sum ', () => {
        it("test sum", async function () {
            const { hardhatCounter } = await loadFixture(deployCounterFixture);
            await hardhatCounter.sum(1,1);
            const sumTotal = await hardhatCounter.totalAdd();
            expect(sumTotal).to.be.not.undefined;
            expect(sumTotal).to.be.not.null;
            expect(sumTotal).to.be.not.equal(3);
            expect(sumTotal).to.be.equal(2)
        })
    })
    describe('less ', () => {
        it("test less", async function () {
            const { hardhatCounter } = await loadFixture(deployCounterFixture);
            await hardhatCounter.less(4,2);
            const totalLess = await hardhatCounter.totalLess();
            expect(totalLess).to.be.not.undefined;
            expect(totalLess).to.be.not.null;
            expect(totalLess).to.be.not.equal(-1);
            expect(totalLess).to.be.equal(2)
        })
    })
    describe('multiple ', () => {
        it("test multiple", async function () {
            const { hardhatCounter } = await loadFixture(deployCounterFixture);
            await hardhatCounter.multiple(3,2);
            const totalMultiple = await hardhatCounter.totalMultiple();
            expect(totalMultiple).to.be.not.undefined;
            expect(totalMultiple).to.be.not.null;
            expect(totalMultiple).to.be.not.equal(-2);
            expect(totalMultiple).to.be.equal(6)
        })
    })
    describe('divide ', () => {
        it("test divide", async function () {
            const { hardhatCounter } = await loadFixture(deployCounterFixture);
            await hardhatCounter.divide(4,2);
            const totalDivide = await hardhatCounter.totalDivide();
            expect(totalDivide).to.be.not.undefined;
            expect(totalDivide).to.be.not.null;
            expect(totalDivide).to.be.not.equal(0);
            expect(totalDivide).to.be.equal(2)
        })
    })
    

})
