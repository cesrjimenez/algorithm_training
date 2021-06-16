/**
 * @param {number} n
 * @param {number[][]} edges
 * @return {number[]}
 
 constraints:
 - 2 <= n <= 10^5
 - 1 <= edges.length <= min(10^5, n * (n - 1) / 2)
 - edges[i].length == 2
 - 0 <= fromi, toi < n
 - All pairs (fromi, toi) are distinct.
 
 
 diagram:
 > test case #1:
    - input: n = 6, edges = [[0,1],[0,2],[2,5],[3,4],[4,2]]
    - output: [0,3]
    
    
    
    edges = [[0,1],[0,2],[2,5],[3,4],[4,2]]
                                        i
    toFrom = {
        0
        1: [0]
        2: [0, 4]
        3: []
        4: [3]
        5: [2]
    }
    
    loop thru toFrom empty arr
    
    adjList = {
        0: [1, 2]
        1: []
        2: [5]
        3: [4]
        4: [2]
        5: []
    }
    
    to  | from
    0   |     
    1   |  0  
    2   |  0, 4    
    3   |    
    4   |  3  
    5   |  2  
    
 > test case #2:
    - input: n = 5, edges = [[0,1],[2,1],[3,1],[1,4],[2,4]]
    - output: [0,2,3]
            from to
    edges = [[0,1],[2,1],[3,1],[1,4],[2,4]]
                                        i
    toFrom = {
     0: []
     1: [0,2,3]
     2: []
     3: []
     4: [1,2]
    }
    
    loop thru toFrom and push empty ones

pcode:
- create toFrom map
- fill map from 0 to n - 1 with empty array for each value key = 0, value = []
- loop thru edges
    - map[edges[1]] push edges[0]
- create result array variable
- loop thru toFrom map keys
    - if toFrom[key].length === 0
        - push key to result array
- return result array
 
 */
var findSmallestSetOfVertices = function(n, edges) {
    let toFrom = {};
    for (let i = 0; i < n; i++) {
        toFrom[i] = [];
    }
    
    for(let i = 0; i < edges.length; i++) {
        let [from, to] = edges[i];
        toFrom[to].push(from)
    }
    
    let result = [];
    for (let key in toFrom) {
        if (toFrom[key].length === 0) {
            result.push(key);
        }
    }
    
    return result;
};












