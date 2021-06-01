/**
 * @param {number[][]} graph
 * @return {number[][]}
 
 constraints:
 - time: O(v+e)
 - space: O(v+e)
 
 diagram:
 - test case #1:
    - input: graph = [[1,2],[3],[3],[]]
    - output: [[0,1,3],[0,2,3]]
    
    - allPath = [[0, 1, 3], [0,2,3]]
    - path = [0,2,3]
      
    [       x  y
    [1,2],  0  0
    [3],    1
    [3],       2
    []      3  3
    ]

- test case #2:
    - input: graph = [[4,3,1],[3,2,4],[3],[4],[]]
    - output: [[0,4],[0,3,4],[0,1,3,4],[0,1,2,3,4],[0,1,4]]
    
    - allPath = [[0,4], [0,3,4], [0,1,3,4], [0,1,2,3,4],[0,1,4]]
    - path = []
    
    [         x   y   z  x1  y1 
    [4,3,1],  0   0   0   0  0
    [3,2,4],          1   1  1
    [3],                  2
    [4],          3   3   3
    []        4   4   4   4  4
    ]

- test case #3:
    - input: graph = [[1], []]
    - output: [[0,1]]
    
    - allPath = [[0,1]]
    - path = []
    
    [    x 
    [1], 0
    []   1
    ]
    
                
pcode:
- create allPath variable
- create target variable (n.length - 1)
- create recursive dfs w/ node and path parameters
    - base case:
        - if node equals target add node to path and push to allPath
    - recursive action:
        - for each edge of the node dfs on the edge and add the node to the path
- call dfs with node 0 and path []
- return allPath

*/
 
var allPathsSourceTarget = function(graph) {
    let allPath = [];
    let target = graph.length - 1;
    
    function dfs(node, path) {
        // base case
        if (node === target) {
            allPath.push([...path, node]);
            return;
        }
        
        // recursive action
        graph[node].forEach(edge => {
            dfs(edge, [...path, node])
        })
    }
    
    dfs(0, [])
    
    return allPath;
};

