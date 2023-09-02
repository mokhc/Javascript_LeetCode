// JavaScript source code
/**
 * @param {number} x
 * @return {number}
 */
// Test Program - Leetcode 69
// Trivial - What is an exponent?
var mySqrt = function (x) {
    let res = parseInt(Math.pow(10.0, (Math.log10(x) / 2.0)));
    return res;
};