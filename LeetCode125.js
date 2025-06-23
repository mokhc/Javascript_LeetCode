// JavaScript source code
/**
 * @param {string} s
 * @return {boolean}
 */
//Test - LC125
//@Author - mokhc
//Trivial - What is one of the elements of a while loop?

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