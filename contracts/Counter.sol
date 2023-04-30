// SPDX-License-Identifier: MIT

pragma solidity 0.8.19;

contract Counter {
    int256 public totalLess;
    int256 public totalAdd;
    int256 public totalMultiple;
    int256 public totalDivide;

    function sum(int256 a, int256 b) public {
        totalAdd = a + b;
    }

    function less(int256 a, int256 b) public  {
        totalLess = a - b;
    }

    function muiltple(int256 a, int256 b) public {
        totalMultiple = a * b;
    }

    function divide(int256 a, int256 b) public notZero(b) {
        totalDivide = a/b;
    }

    modifier notZero(int256 b) {
        require(b != 0, "you can't divide by 0");
        _;
    }

    function valuesReturn()
        public
        view
        returns (
            int256,
            int256,
            int256,
            int256
        )
    {
        return (totalLess, totalAdd, totalDivide, totalMultiple);
    }
}
