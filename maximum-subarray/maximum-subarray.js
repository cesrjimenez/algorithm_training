/**
 * @param {number[]} nums
 * @return {number}
 
 constraints:
 - 1 <= nums.length <= 3 * 104
 - -105 <= nums[i] <= 105
 
 diagram:
    - input: nums = [-2,1,-3,4,-1,2,1,-5,4]
    - output: 6
    
    
    maxSum = -2
    localSum = 0
    
    nums = [-2,1,-3,4,-1,2,1,-5,4]
                  i
                  
pcode:
- create maxSum variable
- create localSum = Math.max(maxSum, 0)
- loop thru nums
    - localSum += nums[i]
    - maxSum = Math.max(localSum, maxSum)
    - localSum = Math.max(localSum, 0)
    
 */
var maxSubArray = function(nums) {
    let maxSum = nums[0];
    let localSum = Math.max(nums[0], 0);
    
    for (let i = 1; i < nums.length; i++) {
        localSum += nums[i];
        maxSum = Math.max(localSum, maxSum);
        localSum = Math.max(localSum, 0);
    }
    
    return maxSum;
};