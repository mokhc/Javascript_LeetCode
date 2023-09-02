// JavaScript source code
/**
 * @param {number[]} prices
 * @return {number}
 */
// Test Program - Leetcode 121
// Trivial - What are the two methods to define an infinity value?
// function
var maxProfit = function (prices) {
    // iniitialization
    var maxprice = 0;;
    var minprice = prices[0];
    var a = 0;
    // loop to find minprice and maxprice
    while (prices.length > a) {
        diff = (prices[a] - minprice)
        if (minprice > prices[a])
            minprice = prices[a]
        else if (maxprice < diff)
            maxprice = diff
        a = a + 1
    }
    return maxprice;
};