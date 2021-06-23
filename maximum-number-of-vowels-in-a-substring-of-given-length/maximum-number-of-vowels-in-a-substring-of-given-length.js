/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 
 constraints:
 - 1 <= s.length <= 10^5
 - s consists of lowercase English letters.
 - 1 <= k <= s.length
 
 diagram:
 > test cases #1:
    - input: s = "abciiidef", k = 3
    - output: 3
    
    k = 3
    n = 2
    maxVowels = 3
    vowels = 2
    s = "a b c i i i d e f"
         0 1 2 3 4 5 6 7 8
                 i
           n   
                   
 > test cases #2:
    - input: s = "aeiou", k = 2
    - output: 3
    
    maxVowels = 2
    vowels = 2
    k = 2
    num = 2
    s = "a e i o u"
         0 1 2 3 4
               i
         
         
> test cases #3:
    - input: s = "leetcode", k = 3
    - output: 2
    
    maxVowels = 2
    vowels = 1
    k = 3
    n = 3
    s = "l e e t c o d e"
         0 1 2 3 4 5 6 7
                       i
         k
    
pcode:
- create vowels set w/ aeiou
- create n variable
- create maxVowels variable
- create localVowel variable
- loop thru s
    - if n less than k
        - n++
    - if s[i] is in vowels
        - localVowel++
    - else if s[i - n] is in vowels
        - localVowel--
    - maxVowel = Math.max(vowels, maxVowels)
- return maxVowels

 */
var maxVowels = function(s, k) {
    let vowels = new Set('aeiou');
    let n = 0;
    let maxVowels = 0;
    let localVowels = 0;
    
    for (let i = 0; i < s.length; i++) {
        if (n < k) {
            n++;
        } else if (vowels.has(s[i - n])) {
            localVowels--;
        }
        
        if (vowels.has(s[i])) {
            localVowels++;
        }
        
        maxVowels = Math.max(maxVowels, localVowels);
    }
    
    return maxVowels;
};









