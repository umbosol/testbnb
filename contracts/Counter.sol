// SPDX-License-Identifier: MIT
pragma solidity 0.8.19;

contract Counter {
    uint256 public totalLess;
    uint256 public totalAdd;
    uint256 public totalMultiple;
    uint256 public totalDivide;

    function sum(uint256 a, uint256 b) public {
        totalAdd = a + b;
    }

    function less(uint256 a, uint256 b) public notMajor(a, b) {
        totalLess = a - b;
    }

    function multiple(uint256 a, uint256 b) public {
        totalMultiple = a * b;
    }

    function divide(uint256 a, uint256 b) public notZero(b) {
        totalDivide = a / b;
    }

    modifier notZero(uint256 b) {
        require(b != 0, "you can't divide by 0");
        _;
    }
    modifier notMajor(uint256 a, uint256 b) {
        require(a >= b, "you cannot subtract a value smaller than the first");
        _;
    }

    function valuesReturn()
        public
        view
        returns (
            uint256,
            uint256,
            uint256,
            uint256
        )
    {
        return (totalLess, totalAdd, totalDivide, totalMultiple);
    }
}
