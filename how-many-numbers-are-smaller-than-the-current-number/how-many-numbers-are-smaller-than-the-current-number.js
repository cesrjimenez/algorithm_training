/**
 * @param {number[]} nums
 * @return {number[]}
 
 
 - constraints:
    - 2 <= nums.length <= 500
    - 0 <= nums[i] <= 100
    - space: O(n log n)
    - time: O(n)
    
    
- diagrams:
> test case #1:
    input: nums = [8,1,2,2,3]
    output: [4,0,1,1,3]
    
    - sort nums asc: O(n log n)
    sorted = [1,2,2,3,8]
              0 1 2 3 4
    
    - create map key = nums[i] and value = sorted.indexOf(i)
    - push value to result array
    
    map = {
     8: 4,
     1: 0,
     2: 1,
     3: 3
    }
                     i
    nums = [8,1,2,2,3]

    result = [4, 0, 1, 1, 3]
    
    
> test case #2:
    input: nums = [6,5,4,8]
    output: [2,1,0,3]
    
    sorted = [4, 5, 6, 8]
              0  1  2  3
              
    map = {
        6: 2,
        5: 1,
        4: 0,
        8: 3
    }
                  i
    nums = [6,5,4,8]
    
    result = [2,1,0,3]
     
     
- pcode:
    - create result array
    - create map 
    - create sorted variable = sorted asc nums array
    - loop thru nums arr
        - if number is not in map, 
            - add to map where the key is n and the value is the index of n in the sorted array
        - get n from map and push to result array
    
     
 */
var smallerNumbersThanCurrent = function(nums) {
    let map = new Map();
    let result = [];
    let sorted = [...nums].sort((a, b) => a - b);
    
    for (let i = 0; i < nums.length; i++) {
        let n = nums[i];
        if (!map.has(n)) {
            map.set(n, sorted.indexOf(n));
        }
        
        result.push(map.get(n));
    }
    
    return result;
    
};