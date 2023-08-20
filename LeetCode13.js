// JavaScript source code
/**
 * @param {string} s
 * @return {number}
 */
// Test Program - LeetCode 13
// Trivial - How can you get the value of a key?
var romanToInt = function (s) {
    // initializations
    let map1 = {
        "I": 1,
        "V": 5,
        "X": 10,
        "L": 50,
        "C": 100,
        "D": 500,
        "M": 1000
    };
    let i = 0;
    let ret = 0;
    // loop to find ret value
    while (i + 1 < s.length) {
        if (map1[s[i]] < map1[s[i + 1]]) {
            ret = ret - map1[s[i]];
        }
        else {
            ret = ret + map1[s[i]];
        }
        i++;
    }
    return ret + map1[s[s.length - 1]];
};