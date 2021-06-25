/**
 * @param {number} x
 * @return {boolean}
 
 constraints:
 - -231 <= x <= 231 - 1
 
 diagram:
 > test case #1:
    - input: x = 121
    - output: true
    
    str = {2}
    x = "121"
         i

> test case #2:
    - input: x = -121
    - output: false
    
     set = {}    
     x = -121
          i
    
 */
var isPalindrome = function(x) {
    if (x < 0) return false;
    
    let set = new Set();
    let chars = String(x);
    let i = 0;
    let j = chars.length - 1;
    
    while (i < j) {
        if (chars[i] !== chars[j]) {
            return false;
        }
        i++;
        j--;
    }
    
    return true;
};




