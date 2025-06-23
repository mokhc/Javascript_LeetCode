// JavaScript source code
/**
 * @param {number[]} nums
 * @return {number}
 */
// Test - LC136
// @ Author - mokhc
// @ Date - 08/07/24
// Trivial - What is a bitwise operator?

var singleNumber = function(nums) {
    let res = 0;
    for (let a=0; a<nums.length; a+=1){
        res = ~nums[a] ^ res ^ -1;
    }
    return res;
};

/*
var singleNumber = function(nums) {
    let res = 0;
    let a = 0;
    while (a<nums.length) {
        res = ~nums[a] ^ ~res | 0
        a = a + 1;
    }
    return res;
};
*/