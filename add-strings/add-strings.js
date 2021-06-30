/**
 * @param {string} num1
 * @param {string} num2
 * @return {string}
 
 constraints:
 - time: O(n)
 - space: O(1)
 
 diagram:
 > test case #1:
    - input: num1 = "11", num2 = "123"
    - output: "134"
    
     result = [134]
     
     num1 =   "1 1" 
               i      
     num2 = "1 2 3"
             j 
             
> test case #2:
    - input: num1 = "456", num2 = "77"
    - output: "533"
    
     result = []
     carry = 0
     num1 = "4 5 6" 
                 i      
     num2 =   "7 7"
                 j 
     13
     
     6+7+0-3
     
pcode:
- create map of integers or array of index
- create result array
- create carry variable
- create i & j and set to end of string
- while i or j are greater than 0
    - as long as j or i are greater than 0 get the index or map
    - sum n1 + num2 + carry
    - if carry is larger than 10
        - remove 10 and unshift to result  
        - set carry to one
    - else
        - unshift sum to result
        - set carry to zero
    - i-- and j--
- if carry is one unshift to result
- return result.join("")
     
    
 */
var addStrings = function(num1, num2) {
    const nums = new Array(10).fill().map((_,i)=>String(i));
    
    let result = [];
    let carry = 0;
    let i = num1.length - 1;
    let j = num2.length - 1;
    
    while (i >= 0 || j >= 0) {
        let n1 = i >= 0 ? nums.indexOf(num1[i]) : 0;
        let n2 = j >= 0 ? nums.indexOf(num2[j]) : 0;
        
        let sum = n1+n2+carry
        if (sum >= 10) {
            result.unshift(sum - 10);
            carry = 1;
        } else {
            result.unshift(sum);
            carry = 0;
        }
        
        i--;
        j--;
    }
    
    if (carry) result.unshift(carry);
    return result.join("");
};