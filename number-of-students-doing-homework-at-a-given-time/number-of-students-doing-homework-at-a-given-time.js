/**
 * @param {number[]} startTime
 * @param {number[]} endTime
 * @param {number} queryTime
 * @return {number}
 
 constraints:
 - startTime.length == endTime.length
 - 1 <= startTime.length <= 100
 - 1 <= startTime[i] <= endTime[i] <= 1000
 - 1 <= queryTime <= 1000
 - time: O(n)
 - space: O(1)
 
 diagram:
 > test case #1: 
    - input: startTime = [1,2,3], endTime = [3,2,7], queryTime = 4
    - output: 1
    
    
    result = 0
    queryTime = 4
                     i
    startTime = [1,2,3] 
                   i
    endTime = [3,2,7]
    
    queryTime >= startTime[i] && queryTime <= endTime[i]
    
 > test case #2: 
    - input: startTime = [4], endTime = [4], queryTime = 5
    - output: 0
    
    
    result = 0
    queryTime = 5
                 i
    startTime = [4] 
               i
    endTime = [4]
    
    queryTime >= startTime[i] && queryTime <= endTime[i]
    
pcode:
- create result variable
- loop thru startTime
    - if queryTime >= startTime[i] && queryTime <= endTime[i]
        - result++
- return result
 
 
 */
var busyStudent = function(startTime, endTime, queryTime) {
    let result = 0;
    for (let i = 0; i < startTime.length; i++) {
        if (queryTime >= startTime[i] && queryTime <= endTime[i]) {
            result++;
        }
    }
    
    return result;
};