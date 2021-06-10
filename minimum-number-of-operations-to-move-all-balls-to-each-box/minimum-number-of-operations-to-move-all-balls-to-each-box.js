/**
 * @param {string} boxes
 * @return {number[]}
 
 constraints:
 - n == boxes.length
 - 1 <= n <= 2000
 - boxes[i] is either '0' or '1'
 - time: O(n)
 - space: O(n)
 
 diagram:
 > test case #1:
    - input: boxes = "110"
    - output: [1,1,3]
 
 # time: O(n^2)
 result = [1, 1, 3]
 
 formula = math.abs(i - j) 
    - i = 0
         = 0 - 0 = 0 
         = 0 - 1 = 1
    - i = 1
         = 1 - 0 = 1
         = 1 - 1 = 0
    - i = 2
         = 2 - 0 = 2
         = 2 - 1 = 1
         
            i
            j
 boxes = "110"
          012
          
 # time: O(n)
 onesIdx = [0, 1]
 result = [1, 1, 3]
 
 formula = math.abs(i - j) 
    - i = 0
        = (0 - 0) + (0 - 1) = 1
    - i = 1
        = (1 - 0) + (1 - 1) = 1
    - i = 2
        = (2 - 0) + (2 - 1) = 3
            
 
          i
 boxes = "110"
          012
          
> test case #2:
onesIdx = [2,4,5]
result = []
 - i = 0
     = (0 - 2) + (0 - 4)  + (0 - 5) = 11

         i
boxes = "001011"
         012345
 
 pcode:
 - create result array variable
 - create onesIdx array variable 
 - loop thru boxes 
    - if curr is "1" push index to oneIdx
 - loop thru boxes
    - create sum variable
    - loop thru onesIdx and add to sum the result of math.abs(i - onesIdx[j])
 - return result array
 
 */
var minOperations = function(boxes) {
    let result = [];
    let onesIdx = [];
    
    for (let i = 0; i < boxes.length; i++) {
        let curr = boxes[i];
        if (curr === "1") {
            onesIdx.push(i);
        }
    }
    
    for (let i = 0; i < boxes.length; i++) {
        let sum = 0;
        for (let j = 0; j < onesIdx.length; j++) {
            sum += Math.abs(i - onesIdx[j]);
        }
        result.push(sum);
    }
    
    return result;
};
