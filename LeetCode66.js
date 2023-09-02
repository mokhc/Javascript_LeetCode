// JavaScript source code
/**
 * @param {number[]} digits
 * @return {number[]}
 */
// Test Program - LeetCode 66
// Trivial - What is main difference between a dowhile and while loop?
var plusOne = function (digits) {
    //initializations
    let ret = [];
    ret = digits;
    let check = true;
    let a = ret.length - 1;
    // loop to increase ret[a] by 1 or assign a value of 0
    while (!(a < 0)) {
        if (ret[a] != 9) {
            ret[a] = ret[a] + 1;
            check = false;
            break;
        }
        else {
            ret[a] = 0;
        }
        a = a - 1;
    }
    //determine if check equals true
    if (check == true) {
        ret[0] = 1;
        ret.push(0);
    }
    return ret
};