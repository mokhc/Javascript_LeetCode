// JavaScript source code
/**
 * @param {number} rowIndex
 * @return {number[]}
 */
// Test LC119
// @Author : mokhc
// Trivial - What is a characteristics of a two dimensional array?

var getRow = function (rowIndex) {
    // initializations
    let ret = [];
    ret.push(1);
    let r = 0;
    // loop to get the values
    for (let a = 1; a < rowIndex + 1; a++) {
        ret.push(((ret[a - 1] * (rowIndex - r)) / (r + 1)));
        r = r + 1;
    }
    // return
    return ret;
};

