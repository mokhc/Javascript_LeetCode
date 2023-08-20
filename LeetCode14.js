// JavaScript source code
/**
 * @param {string[]} strs
 * @return {string}
 */
// Test Program - LeetCode 14
// Trivial - How can you access a specific element of a string in a string array 
var longestCommonPrefix = function (input) {
	// if input is Null, return Null
	if (input == "") {
		return "";
	}
	// initializations
	var ret = "";
	var inputlen = input.length;
	var str0len = input[0].length;
	var i = 0;
	// console.log(input[0][0]) // access one element
	// loop to compare first and the rest
	while (i < str0len) {
		var init = false;
		var j = 1;
		while (j < inputlen) {
			if (!((typeof input[j][i] == "undefined" || input[j][i]) == input[0][i])) { // input[j][i] == undefined or == void 0 or typeof input[j][i] == "undefined"
				init = true;
				break;
			}
			j = j + 1;
		}
		// add element(s)
		if (init == false) {
			ret = ret + input[0][i];
		} else {
			return ret;
		}
		i = i + 1;
	}
	return input[0]

};