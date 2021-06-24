/**
 * @param {number} x
 * @return {number}
 
 constraints:
 - -231 <= x <= 231 - 1
 
 diagram:
 > test case #1:
    - input: x = 123
    - output: 321
    
    result = "321"
    result = Number(result);
            
            123
            i
            
> test case #2:
    - input: x = 120
    - output: 21
    
    
    result  = "021"
    result = Number(result);
                120
                  i
                
pcode:
- create a result variable
- loop thru x from the end
    - add x[i] to result   
- result change to number
- if n < 0 then multiply result by -1
- if result is not greater or less than Number.MAX_SAFE_INTEGER 
    - return result
- return 0  
            
 */
var reverse = function(x) {
    let maxX = Math.pow(2, 31) - 1;
    
    let result = ""
    let char = String(Math.abs(x))
    for  (let i = char.length - 1; i >= 0; i--) {
        result += char[i];
    }
    result = Number(result);
    if (result >= maxX) return 0;
    if (x < 0) {
        result = result * -1;
    }
    
    
    return result;
};