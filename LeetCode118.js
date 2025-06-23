// JavaScript source code
// Test - LC118
// @Author - mokhc
// Trivial - What is a two dimensional array?
/**
 * @param {number} numRows
 * @return {number[][]}
 */
// function 1
var generate1 = function (numRows) {
    // initialize
    const base = [[1]];
    // set the rows with 1s at the beginning and end
    for (let a = 0; a < numRows-1; a++) {
        const row = [1];
        for (let b = 0; b < base[a].length - 1; b++) {
            row.push(0);
        }
        row.push(1);
        base.push(row);
    }
    // set rest of the values
    for (let a = 2; a < numRows; a++) {
        for (let b = 1; b < base[a].length - 1; b++) {
            base[a][b] = base[a-1][b-1] + base[a-1][b];
        }
    }
    return base;
};

