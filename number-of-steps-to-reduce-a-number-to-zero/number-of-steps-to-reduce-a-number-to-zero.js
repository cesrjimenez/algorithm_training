/**
 * @param {number} num
 * @return {number}
 constraints:
 - 0 <= num <= 10^6
 - time: O(n)
 - space: O(1)
 
 diagram:
 
 
 formula = even % 2 || odd - 1
    
count = 6

 14 % 2 === 0
    14 / 2 = 7
 7 % 2 > 0
    7-1 = 6
 6 % 2 === 0
    6 / 2 = 3
3 % 2 > 0
    3 - 1 = 2
2 % 2 == 0
    2 / 2 = 1
1 % 2 > 0
    1 - 1 = 0
 
pcode:
- create count variable
- create runningTotal variable
- set runningTotal to num
- while runningTotal is not zero
    - if runningTotal % 2 === 0 
        - runningTotal /= 2
    - else
        - runningTotal -= 1
    count++;
- return count
 
 */
var numberOfSteps = function(num) {
    let count = 0;
    let runningTotal = num;
    
    while(runningTotal > 0) {
        if (runningTotal % 2 === 0) {
            runningTotal /= 2;
        } else {
            runningTotal -= 1;
        }
        count++;
    }
    
    return count;
};