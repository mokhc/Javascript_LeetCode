// JavaScript source code
// Test Program - Leetcode 88
// Trivial - How do you sort an array?
/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
// function to compare
function compare(a, b) {
    return a - b;
}
// function to merge
var merge = function (nums1, m, nums2, n) {
    for (let a = 0; a < n; a++) {
        nums1[a + m] = nums2[a];
    }
    // sorted with custom function
    nums1.sort(compare);
}