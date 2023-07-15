// JavaScript source code
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
// Test Program - LeetCode 1
// Trivial - How can you add value to an array?
// Runtime ~ 99.30%
var twoSum = function (nums, target) {
    // initialize
    let list = [];
    let ind = 0;
    // loop to find value in list
    while (ind < nums.length) {
        if (target - nums[ind] in list) {
            return [list[target - nums[ind]], ind];
        }
        // add index as value
        list[nums[ind]] = ind;
        ind += 1;
    }
};
