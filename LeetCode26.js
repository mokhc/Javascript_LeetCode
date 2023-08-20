// JavaScript source code
/**
 * @param {number[]} nums
 * @return {number}
 */
// Test Program - LeetCode 26
// Trivial - What is one of the elements of a while loop?
var removeDuplicates = function (nums) {
    // initializations
    var index = 1;
    var a = 1;
    if (nums.length == 1) {
        return index;
    }
    else {
        do {
            // Checking for unique element(s)
            if (!(nums[a - 1] == nums[a])) {
                // The unique element at insertIndex index is stored
                // the insertIndex is increased by 1
                nums[index] = nums[a];
                //document.write(nums[a]);
                index = index + 1;
            }
            a++;
        } while (a < nums.length);
    }
    return index;
};