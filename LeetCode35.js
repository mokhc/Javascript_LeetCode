// JavaScript source code
// Test Program - LeetCode 35
// Trivial - What is one of the elements in a while loop?
// Runtime - 98.84%

// function
var searchInsert = function (nums, target) {
    // initializations
    let search = 0;
    let low = 0;
    let high = nums.length - 1;
    let ret = 0;
    // loop to find ret value
    while (high >= low) {
        search = (high - low) + low / 2;
        if (nums[search] == target) {
            //cout << "==" << endl;
            ret = search;
            break;
        }
        else if (target > nums[search]) {
            //cout << " > " << endl;
            low = search + 1;
            ret = low;
        }
        else if (target < nums[search]) {
            //cout << " < " << endl;
            high = search - 1;
            ret = high;
        }
    }
    if (ret == -1) {
        ret = 0;
    }
    return ret;
}