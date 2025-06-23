// JavaScript source code
// Test - LC121
// @Author - mokhc
// Trivial - What is an absolute function?
/**
 * @param {number[]} prices
 * @return {number}
 */

var maxProfit1 = function (prices) {
    // initializations
    let prev = 0;
    let count = 0;
    let diff = 0;
    let data = 1;
    // loop
    while (data < prices.length) {
        diff = prices[count] - prices[data];
        data = data + 1;
        if (prev > diff) {
            prev = diff;
        }
        if (diff > 0) {
            count = data - 1;
        }
    }
    return Math.abs(prev);
};
