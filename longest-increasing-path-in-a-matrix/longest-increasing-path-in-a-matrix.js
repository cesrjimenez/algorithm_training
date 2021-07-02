/**
 * @param {number[][]} matrix
 * @return {number}
 
 constraints:
 - time: O(m+n)
 - space: O(1)
 
 diagram:
 > test case #1:
    - input: matrix = [[9,9,4],[6,6,8],[2,1,1]]
    - output: 4
    
    matrix = [
         col
    row [9,9,4],
        [6,6,8],
        [2,1,1]
    ]

pcode:
- create maxCount variable
- create cache
- recursive function with col & row & min
    - base case
        - out of bounds: if row < 0 || col < 0 || row > matrix.length || col > matrix[0].length return 0
        - if min < matrix[row][col] return 0
    - recursive action
        - let top = recursive recursive(row+1, col. min)
        - let bottom = recursive recursive(row-1, col, min)
        - let left = recursive recursive(row, col-1, min)
        - let right = recursive recursive(row, col+1, min)
        - count = Math.max(top, bottom, left, right)
        - cache[key] = count
        - return count;
- loop thru all squares
    - Math.max(maxCount, invoke recursive per square) 
    
- return maxCount
    
 */
var longestIncreasingPath = function(matrix) {
    let maxCount = 0;
    let cache = {};

    function increasingPath(row, col, min) {
        let key = row + '_' + col;
        
        // base case        
        if (row >= matrix.length || col >= matrix[0].length) return 0;
        if (row < 0 || col < 0) return 0;
        if (min !== Number.MIN_SAFE_INTEGER && min <= matrix[row][col]) return 0;
        if (key in cache) {
            return cache[key];
        }
        
        let top = increasingPath(row + 1, col, matrix[row][col]);
        let bottom = increasingPath(row - 1, col, matrix[row][col]);
        let left = increasingPath(row, col - 1, matrix[row][col]);
        let right = increasingPath(row, col + 1, matrix[row][col]);
        
        let count = 1 + Math.max(top, bottom, left, right);
        cache[key] = count;
        return count;
    }
    
    
    for (let i = 0; i < matrix.length; i++) {
        for (let j = 0; j < matrix[i].length; j++) {
            maxCount = Math.max(maxCount, increasingPath(i, j, Number.MIN_SAFE_INTEGER))
        }
    } 
    
    return maxCount;
};