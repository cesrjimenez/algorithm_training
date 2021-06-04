/**
 * @param {number[]} nums
 * @return {number}
 
 
 constraints:
 - 4 <= nums.length <= 10000
 - 0 <= nums[i] < 10000
 - nums.length is even
 - time: 0(n)
 - space: O(n)
 
 diagram:
 > test case #1:
 - input: nums[1,2,3,3]
 - output: 3
 
 result
 map = {
  1: 1
  2: 1,
  3: 1
 }
        i 
 [1,2,3,3]
 
 
 > test case #2:
      i
 [5,1,5,2,5,3,5,4]
 
 - pcode:
 - create a map variable
 - create a result variable
 - loop thru nums arr
    - if num[i] is in map return results = nums[i]
    - add to map
 - return result
 
 */
var repeatedNTimes = function(nums) {
    let map = {}
    let result = -1;
    
    for (let i = 0; i < nums.length; i++) {
        let current = nums[i];
        if (map[current]) {
            result = current;
        }
        map[current] = (map[current] || 0) + 1;
    }
    
    return result;
};