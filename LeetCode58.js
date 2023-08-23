// JavaScript source code
// Test Program - LeetCode 58
// Trivial - How do you construct a loop starting from the end point?
/**
 * @param {string} s
 * @return {number}
 */
 // function
var lengthOfLastWord = function(s) {
    // initializations
    let len_s = s.length - 1;
    let count = 0;
    let ret = 0;
    // loop to determine the len_s
    for (let a = len_s; a >= 0; a--) {
        if (s[a] == " ") {
            len_s = len_s - 1;
        }
        else {
            break;
        }
    }
    // conditions to set ret to 1
    if (len_s == 0 || len_s == 1) {
        ret = 1;
    }
    // loop to determine count
    for (let a = len_s; a >= 0; a--) {
        if (s[a] != " ") {
            count = count + 1;
            ret = count;
        }
        else {
            break;
        }
    }
    return ret;
};