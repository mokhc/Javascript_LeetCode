// JavaScript source code
/**
 * @param {string} s
 * @return {boolean}
 */
//Test - LC125
//@Author - mokhc
//@Date - 12/07/24 / 12/11/24 / 01/05/25
//Trivial - What is one of the elements of a while loop?
//Pending - Submitted on 12/11/24 / 01/05/25
/*
var isPalindrome = function(s) {
    // match to extract
    let res = s.match(/[ABCDEFGHIJKLMNOPQRSTUVWXYZabcedfghijklmnopqrstuvwxyz0123456789]/g)
    // condition for null
    if (res == null){
        return true;
    }
    // reverse, convert to string and lower case
    let rev = res.toReversed().toString().toLowerCase();
    // convert to string and lower case
    res = res.toString().toLowerCase();
    // return
    return (rev == res);
};
*/
/*
var isPalindrome = function(s) {
    // match to extract and convert to string and lower case
    let res = String(s.match(/[A-Za-z0-9]/g)).toLowerCase();
    // condition for null
    if (res == ""){
        return true;
    }
    // convert to lower case
    let rev = res;
    // split and reverse
    res = res.split(",").toReversed();
    // return
    return (res == rev);
};
*/

var isPalindrome = function (s) {
    // initialize
    var str1 = "01234567890abcdefghijklmnopqrstuvwxyz";
    var s = s.toLowerCase();
    var l = 0;
    var r = s.length - 1;
    // loop to return boolean value
    while (l < r) {
        while (((str1.includes(s[l]) == false)) && (r > l)) {
            l += 1;
        }
        while (((str1.includes(s[r]) == false)) && (r > l)) {
            r -= 1;
        }
        if ((s[l] == s[r]) == false) {
            return false;
        }
        l = l + 1;
        r = r - 1;
    }
    return true;
}

var isPalindrome = function (s) {
    // initialize 
    var str1 = "01234567890abcdefghijklmnopqrstuvwxyz";
    var s = s.toLowerCase();
    var l = 0;
    var r = s.length - 1;
    // loop to return boolean value
    while (r - l >= 0) {
        while (((str1.includes(s[l]) == false)) && (r > l)) {
            l += 1;
        }
        while (((str1.includes(s[r]) == false)) && (r > l)) {
            r -= 1;
        }
        if ((s[l] == s[r]) == false) {
            return false;
        }
        l = l + 1;
        r = r - 1;
    }
    return true;
}