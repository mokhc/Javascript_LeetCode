// JavaScript source code
/**
 * @param {number[]} nums
 * @param {number} lower
 * @param {number} upper
 * @return {number[][]}
 */
//Test - LC163
//@Author - mokhc
//Trivial - How do you loop through without starting from zero?

// Function 1
var findMissingRanges = function (nums, lower, upper) {
    //initializations
    //set length
    let lennums = nums.length;
    //initialize an empty array res
    let res = [];
    //initialize an empty array copy
    let copy = [];
    let i = 0;
    let a = 0;
    //set the first element
    copy[0] = lower - 1;
    //set the last element
    copy[lennums + 1] = upper + 1;
    //set the rest of elements in copy
    i = 1;
    while (i < lennums + 1) {
        copy[i] = nums[i - 1];
        i = i + 1;
    }
    //loop to set the missing range(s)
    i = 1;
    while (copy[i] <= copy[copy.length - 1]) {
        subres = copy[i] - copy[i - 1]
        //condition if difference is 2
        if ((subres == 2) == true) {
            res[a] = [copy[i - 1] + 1, copy[i - 1] + 1];
            a = a + 1;
        }
        //condition if difference is more than 2
        else if ((subres > 2) == true) {
            res[a] = [copy[i - 1] + 1, copy[i] - 1];
            a = a + 1;
        }
        i = i + 1;
    }
    return res
};
