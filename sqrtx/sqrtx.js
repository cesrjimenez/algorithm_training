/*
constraints:
- no built-in functions
- no pow or **

diagram:
> test case #1:
    - input: x = 4
    - output: 2
    
                  0 x 0 = 0
                  1 x 1 = 1
                  2 x 2 = 4

> test case #2:
    - input: x = 8
    - output: 2
    
                  0 x 0 = 0
                  1 x 1 = 1
                  2 x 2 = 4
                  3 x 3 = 9

> test case #2:
    - input: x = 1
    - output: 1
    
                  0 x 0 = 0
                  1 x 1 = 1
                  
                  
pcode:
- create lastCalc variable
- create lastIdx variable
- loop from 0 -> x
    - pow = i x i
    - if pow is equal to x
        return i
    - if pow is greater than x
        - return lastIdx
    - lastCalc = pow
    - lastIdx = i
- return lastIdx
                 
*/
/**
 * @param {number} x
 * @return {number}
 */
var mySqrt = function(x) {
    let lastCalc = 0;
    let lastIdx = 0;
    for (let i = 0; i <= x; i++) {
        let pow = i * i;
        if (pow === x) {
            return i;
        }
        
        if (pow > x) {
            return lastIdx;
        }
        
        lastCalc = pow;
        lastIdx = i;
    }
    
    return lastIdx;
};