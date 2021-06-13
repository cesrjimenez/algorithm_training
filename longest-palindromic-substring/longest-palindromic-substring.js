/**
 * @param {string} s
 * @return {string}
  
  constraints:
  - 1 <= s.length <= 1000
  - s consist of only digits and English letters (lower-case and/or upper-case),
  - time: O(n^2)
  - space: O(n^2)
  
  diagram:
  > test case #1: 
    - input: s = "babad"
    - output: "bab"
    
    
    sub = "bab"
    
    s = "babad"
         i
            j
            
 > test case #2:
    - input: s = "cbbd"
    - output: "bb"
    
    
    sub = "bb"
    
    s = "cbbd"
           i
            j

pcode:
- create maxSub variable
- create helper function isPalindrome
    - while i >= 0 && j < than s.length && s[i] == s[j]
        - i--
        - j++
    - return s.substring(i + 1, j)
- loop thru s
    - for each i find the palidrome for even i and odd i+1
    - create even = isPalindrome(i, i)
    - create odd = isPalindrome(i, i+1)
    - find largest one between even or odd
    - set maxSub as the larger between previous maxSub and even or odd
- return maxSub
 */
var longestPalindrome = function(s) {
    let maxSub = '';
    
    function isPalindrome(i, j) {
        while(i >= 0 && j < s.length && s[i] === s[j]) {
            i--;
            j++;
        }
        return s.substring(i+1, j);
    }
    
    for (let i = 0; i < s.length; i++) {
        let even = isPalindrome(i, i);
        let odd = isPalindrome(i, i+1);
        
        let larger = even.length >= odd.length ? even : odd;
        if (larger.length > maxSub.length) {
            maxSub = larger;
        }
    }
    
    return maxSub;
};