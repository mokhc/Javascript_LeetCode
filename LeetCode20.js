// JavaScript source code
/**
 * @param {string} s
 * @return {boolean}
 */
// Test Program - Leetcode 20
// Trivial - How do initialize an array in JS?
// function
var isValid = function (s) {
    // initializations
    st = []
    console.log(s.length)
    // loop to set the stack and compare
    var c = 0;
    while (c < s.length) {
        console.log("s[c] :", s[c]);

        if (s[c] == '(') {
            st.push(')');
            console.log(")", c);
        }
        else if (s[c] == '{') {
            st.push('}');
            console.log("}", c);
        }
        else if (s[c] == '[') {
            st.push(']');
            console.log("]", c);
        }
        else if (s[c] != st.pop()) {
            console.log("return false");
            return false;
        }
        c += 1;
    }
    console.log("st.length :", st.length)
    return st.length == false;
};