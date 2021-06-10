/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 
 constraints:
 - 2 <= nums.length <= 104
 - 109 <= nums[i] <= 109
 - 109 <= target <= 109
 - Only one valid answer exists.
 - time: O(n)
 - space: O(n)
 
 diagram:
 
 > test case #1:
 - input: nums = [2,7,11,15], target = 9
 - output: [0,1]
 
 
 map = {
    2: 0,

 }
 
 needed = 9 - 7 = 2
 target = 9
            i
 nums = [2, 7, 11, 15]
         0  1   2   3
         
         
pcode:
- create map variable
- loop thru nums array
    - create needed variable set to target - nums[i];
    - if needed in map
        - return [map[needed], i]
    - set map[nums[i]] = i
- return []
 */

var twoSum = function(nums, target) {
    let map = {};
    for (let i = 0; i < nums.length; i++) {
        let needed = target - nums[i];
        if (needed in map) {
            return [map[needed], i];
        }
        map[nums[i]] = i;
    }
    
    return [];
};