// JavaScript source code
// Test - LC121
// @Author - mokhc
// @Date - 19/07/24 / 18/06/25 / 19/06/25
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


var maxProfit2 = function(prices) {
     // initializations
        var prev = 0;
        var count = 0;
        var diff = 0;
        var data = 1;
        // loop
        while (data != prices.length) {
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
