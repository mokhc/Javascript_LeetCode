// JavaScript source code
// Test Program - Leetcode 67
// Trivial - What is one of the methods to convert a binary to decimal?
/**
 * @param {string} a
 * @param {string} b
 * @return {string}
 */
// function
var addBinary = function (a, b) {
    let comb = BigInt(`0b${a}`) + BigInt(`0b${b}`) // add
    return comb.toString(2); // convert to binary string
};