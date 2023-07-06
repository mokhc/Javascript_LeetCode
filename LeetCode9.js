// JavaScript source code
/**
 * @param {number} x
 * @return {boolean}
 */
// Test Program - LeetCode 9
// Trivial - How can you add an element to a string?
var isPalindrome = function (x) {
    // initializations
    let rev = 0;
    let rem = 0;
    let res = x;
    // loop to generate the reverse number
    while (res > 0) {
        rem = res % 10;
        res = parseInt(res / 10);
        rev = rev * 10 + rem;
    }
    return (x - rev) == 0;
};