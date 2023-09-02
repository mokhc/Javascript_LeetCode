// JavaScript source code
// Test Program - Leetcode 70
// Trivial - What is the function of the ! operator?
/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function (n) {
    let ret = 0;
    let temp = 0;
    let index = 0;
    if (!(n > 1) && !(n < 1)) {
        ret = 1;
        return ret;
    }
    let arr = new Array(n + 1);
    arr[index + 1] = 1;
    arr[index + 2] = 2;
    let a = 3
    while (a <= n) {
        temp = arr[a - 1] + arr[a - 2]
        arr[a] = temp
        a += 1
    }
    ret = arr[n]
    return ret
};