/**
 * @param {string} s
 * @return {number}
 
 constraints:
 - 1 <= s.length <= 104
 - s consists of only English letters and spaces ' '.
 
 diagram:
 > test case #1:
    - input: s = "Hello World"
    - output: 5
    
    result = 5
    s = "Hello World"
              i
              
pcode:
- create result variable
- create len variable s.length - 1
- while s[s.length - 1] == " "
    - len--;
- loop s from right and left
    - if s[i] is empty break
    - result++;
- return result;
              
 */
var lengthOfLastWord = function(s) {
    let result = 0;
    let len = s.length - 1;
    
    while (s[len] === " ") {
        len--;
    }
    
    for (let i = len; i >= 0; i--) {
        if (s[i] === " ") break;
        result++;
    }
    
    return result;
};