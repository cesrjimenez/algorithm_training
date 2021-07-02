/**
 * @param {number} m
 * @param {number} n
 * @return {number}
 
 constraints:
 - 1 <= m, n <= 100
 - It's guaranteed that the answer will be less than or equal to 2 * 109.
 
 diagram:
 - input: m = 3, n = 2
 - output: 3
                                                 col, row
                                                  (0,0)
                                      /                          \
                                    (0,1)                      (1,0)
                          /               \                     /    \
                        (1,1)            (0,2)              (2,0)  (1,1)
                      /     \            /     \           /     \  /     \
                    (2,1) (1,2)
pcode:
- create cache variable
- recurse
    - create key variable
    - base case
        - if m === col && n === row return 1
        - if col > m || row > n return 0;
        - if key in cache return cache[key]
    - recursive action
        - path = recurse col + 1, row + recurse col, row + 1
        - cache[key] = path
        - return cache[key]
- return invoke w/ 0, 0

 */
var uniquePaths = function(m, n) {
    let cache = {};
    function uniquePath(row, col) {
        let key = row + '_' + col;
        if (key in cache) {
            return cache[key];
        }
        
        if (m === col && n === row) {
            return 1;
        }
        
        if (col > m || row > n) {
            return 0;
        }
        
        cache[key] = uniquePath(row + 1, col) + uniquePath(row, col + 1);
        
        return cache[key];
    }
    
    return uniquePath(1, 1)
};