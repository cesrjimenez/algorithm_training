/**
 * @param {string} s
 * @return {number}
 
 constraints:
 - 1 <= s.length <= 1000
 - s[i] is either 'L' or 'R'.
 - s is a balanced string.
 - time: O(2^n)
 - space: O(2^n)
 
 diagram:
 > test case #1: 
    - Input: s = "RLRRLLRLRL"
    - Output: 4
    
    
    result = 4
    queue = [
    R
    
    ]
    
    
    "RLRRLLRLRL"
              i
    
    count = 1
    q = [L,L, L]
    
    "RLLLLRRRLR"
          i
pcode:
- create count variable
- create queue variable
- while i < s.length
    - if s[i] == "R" 
        -  enqueque s[i]
        - i++
    - else 
        - dequeue 
        - if queue is empty
            - count++
    - i++
- return count

 
 
 */
var balancedStringSplit = function(s) {
    let count = 0;
    let queue = [];
    let i = 0;
    
    let map = {
        "R": "L",
        "L": "R"
    }
    
    while (i < s.length) {
        
        if (!queue.length) {
            queue.unshift(s[i]);
        } else {
            let peek = queue[queue.length - 1];
                 // R          L
            if (map[s[i]] === peek) {
                queue.pop();
                if (!queue.length) {
                    count++;
                }
            } else {
                queue.unshift(s[i]);
            }
            
        }
        
        i++;
    }
    
    return count;
};