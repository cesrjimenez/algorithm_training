/**
 * @param {number[]} nums
 * @return {number}
 */

/*
constraints:
- 1 <= nums.length <= 100
- 1 <= nums[i] <= 100
- time: O(n)
- space: O(n)

diagram:
> test case #1:
- input: nums = [1,2,3,1,1,3]
- output: 4

map = {
  1:2
  2:1
  3:1
}

count = 4
                  i
nums = [1,2,3,1,1,3]
        0 1 2 3 4 5
        
triangular number formula
t = (n * (n+1))/2

> test case #2:
- input: nums = [1,1,1,1]
- output: 6

map = {
1:4
}

count = 6 // <= +nums[i]

              i
nums = [1,1,1,1]


- pcode:
- create map variable
- create count variable
- loop thru nums array
    - if nums[i] is in map then add nums[i] to count
    - else add nums[i] to map
- return count variable

*/
var numIdenticalPairs = function(nums) {
    let map = {};
    let count = 0;
    
    for (let i = 0; i < nums.length; i++) {
        let curr = nums[i];
        if (curr in map) {
            count += map[curr];
            map[curr]++;
        }  else {
            map[curr] = 1;
        }
    }
    
    return count;
};