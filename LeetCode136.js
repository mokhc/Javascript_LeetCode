// JavaScript source code
/**
 * @param {number[]} nums
 * @return {number}
 */
// Test - LC136
// @ Author - mokhc
// Trivial - What is a bitwise operator?

var singleNumber = function(nums) {
    let res = 0;
    for (let a=0; a<nums.length; a+=1){
        res = ~nums[a] ^ res ^ -1;
    }
    return res;
};