/**
 * @param {number[]} nums
 * @param {number[]} index
 * @return {number[]}


constraints:
- time: O(n)
- space: O(n)

diagram:
> test case #1:

- input: nums = [0,1,2,3,4], index = [0,1,2,2,1]
- output: [0,4,1,3,2]

target = [0, 4, 1, 3, 2]

                 i 
nums  = [0,1,2,3,4] 

                 i  
index = [0,1,2,2,1]

pcode:
- create target array
- loop thru index array
    - target.splice(index[i], 0, nums[i]);
- return target

 */
var createTargetArray = function(nums, index) {
    let target = [];
    for (let i = 0; i < nums.length; i++) {
        target.splice(index[i], 0, nums[i]);
    }
    
    return target;
};

