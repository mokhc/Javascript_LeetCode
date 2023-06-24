// JavaScript source code
// Test Program - LeetCode 27
// Trivial - What is one of the elements of a while loop?
// Runtime - 89.16%

// function
var removeElement = function (nums, val) {
    // initializations
    let currunique = 0;
    let a = 0
    // while loop to find currunique
    while (a < nums.length) {
        if (nums[a] != val) {
            nums[currunique] = nums[a];
            currunique++;
        }
        a++;
    };
    return currunique;
}
