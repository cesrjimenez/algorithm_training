/**
 * @param {number[]} nums
 * @param {number} n
 * @return {number[]}
 
 constraints:
 - 1 <= n <= 500
 - nums.length == 2n
 - 1 <= nums[i] <= 10^3
 - time: O(n)
 - space: O(n)
 
 diagram:
 > test case #1:
    - input: nums = [2,5,1,3,4,7], n = 3
    - output: [2,3,5,4,1,7] 
    
    n = 3
    nums = [2,5,1,3,4,7]
                i
                      j
                      
                      
    result = [2,3,5,4,1,7]
    
pcode:
- create result array variable
- create i variable set to 0
- create j variable set to n
- while i < n
    - result.push(nums[i])
    - result.push(nums[j])
    - i++
    - j++
- return result
    
    
 */
var shuffle = function(nums, n) {
    let result = [];
    let i = 0;
    let j = n;
    
    while (i < n) {
        result.push(nums[i]);
        result.push(nums[j]);
        i++;
        j++;
    }
    
    return result;
};