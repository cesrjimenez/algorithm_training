/**
 * @param {number[]} arr
 * @return {boolean}
 
 cosntraints:
 - 1 <= arr.length <= 1000
 - 1000 <= arr[i] <= 1000
 - time: O(n)
 - space: O(n)
 
 diagram:
 - test case #1:
 - Input: arr = [1,2,2,1,1,3]
 - Output: true
 
 map = {
    1: 3,    
    2: 2, i 
    3: 1   
 }
            i
 [1,2,2,1,1,3]
 
 set = { 3, 2, 1}
 
 - test case #2:
 
 - Input: arr = [1,2]
 -Output: false
 
 map = {
 1:1, i
 2:1 1
 }
 
  i
 [1,2]
 
 set = {1: }
 return false
 
 pcode:
 - create map
 - create set
 
 - loop thru array and build map
 - loop thru map and check if its in set if not added
    - if its in set return false
 - return true
 

 
 */
var uniqueOccurrences = function(arr) {
    let map = {};
    let set = new Set();
    
    for (let i = 0; i < arr.length; i++) {
        const curr = arr[i];
        map[curr] = (map[curr] || 0) + 1;
    }
    
    for (let key in map) {
        const curr = map[key];
        if (set.has(curr)) return false;
        set.add(curr);
    }
    
    return true;
};
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    