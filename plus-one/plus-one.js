/**
 * @param {number[]} digits
 * @return {number[]}
 
 constraints:
 - 1 <= digits.length <= 100
 - 0 <= digits[i] <= 9
 - time: O(n)
 - space: O(1)
 
 diagram:
 > test case #1:
    - input: digits = [1,2,3]
    - output: [1,2,4]
    
    
                  i
    digits = [1,2,4]
    
> test case #2:
    - input: digits = [1,1,9]
    - output: [1,2,0]
    
                i
    digits = [1,2,0]
    
    
> test case #3:
    - input: digits = [9,9,9,9]
    - output: [1,0,0,0,0]
    
             i
    digits = [1,0,0,0,0]
    
pcode:
- loop array from the back
    - if number is between 0 and 8 add one and return array
    - if number is 9 turn it to 0
- if first index is 0 unshift a 1 and return array
 
 */
var plusOne = function(digits) {
    for (let i = digits.length - 1; i >= 0; i--) {
        if (digits[i] >= 0 && digits[i] <= 8) {
            digits[i]++;
            return digits;
        }
        
        digits[i] = 0;
    }
    
    digits.unshift(1);
    
    return digits;
};