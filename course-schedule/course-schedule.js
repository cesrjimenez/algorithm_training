/**
 * @param {number} numCourses
 * @param {number[][]} prerequisites
 * @return {boolean}
 
 constraints:
 - 1 <= numCourses <= 105
 - 0 <= prerequisites.length <= 5000
 - prerequisites[i].length == 2
 - 0 <= ai, bi < numCourses
 - All the pairs prerequisites[i] are unique.
 
 diagram:
 > test case #1:
    - input: numCourses = 2, prerequisites = [[1,0]]
    - output: true
    
    toFrom = {
        0: [1]
        1: []
    }
    
    inDegree = [0,1]
    
    result = [0,1]
    q = [
    
    ]
    
                    0  x
                   /   
                  1    x
pcode:
- create inDegree variable array fill zero
- create adjList variable
- populate adjList w prerequisites
    - [to, from]
    - adjList[from].push(to)
    - inDegree[from]++
- create result variable
- create queue 
- loop thru inDegree
    - if inDegree is zero
        - queue node
- while queue is not empty
    - let from = unshift
    - result.push(from)
    - neighbor = adjList[from]
    - loop thru neighbor
        - inDegree[neighbor[i]]--
        - if inDegree[neighbor[i]] equal zero
            - result push inDegree[neighbor[i]]
- return result.length === numCourses

 */
var canFinish = function(numCourses, prerequisites) {
    let adjList = {};
    for (let i = 0; i < numCourses; i++) {
        adjList[i] = []
    }
    
    let inDegree = new Array(numCourses).fill(0);
    for (let i = 0; i < prerequisites.length; i++) {
        let [to, from] = prerequisites[i];
        adjList[from].push(to);
        inDegree[to]++;
    }
    
    let queue = [];
    for (let i = 0; i < inDegree.length; i++) {
        if (!inDegree[i]) {
            queue.push(i);
        }
    }
    
    let result = [];
    while (queue.length) {
        let node = queue.shift();
        result.push(node);
        
        let neighbors = adjList[node];
        for (let i = 0; i < neighbors.length; i++) {
            let curr = neighbors[i];
            inDegree[curr]--;
            if (!inDegree[curr]) {
                queue.push(curr);
            }
        }
    }
    
    return result.length === numCourses;
};







