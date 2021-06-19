/**
 * @param {number} numCourses
 * @param {number[][]} prerequisites
 * @return {number[]}
 
 constraints:
 - 1 <= numCourses <= 2000
 - 0 <= prerequisites.length <= numCourses * (numCourses - 1)
 - prerequisites[i].length == 2
 - 0 <= ai, bi < numCourses
 - ai != bi
 - All the pairs [ai, bi] are distinct.
 
 diagram:
 > test case #1:
    - input: numCourses = 2, prerequisites = [[1,0]]
    - output: [0,1]
    
    prerequisites = [[1,0]]
                      i
    adjList = {
        0: [1],
        1: []
    }          
    
    result = [1,0] 
    reverse = [0,1]
    
                        0
                       /
                      1
> test case #2:
    - input: numCourses = 4, prerequisites = [[1,0],[2,0],[3,1],[3,2]]
    - output: [0,2,1,3]
    
    prerequisites = [[1,0],[2,0],[3,1],[3,2]]
    
    adjList = {
        0: [1, 2]
        1: [3]
        2: [3]
        3: []
    }
    visited = {0,1,3,2}
    output = [3, 1, 2, 0]
    reversed = [0,1,2,3] 
                        0
                       /  \
                      1    2
                     /     /
                    3
pcode:
- create visited map
- create result array
- create adjList from prerequisites
    - loop thru prerequisites
    - from 0 - n
    - key = i, value = []
- create recursive function w/ i
    - base case
        - i is in visited return
    - recursive relations
        - for each neighbor of i
            - dfs
        - result push i
- call recursive function w/ 0
- return result reverse
 */
// var findOrder = function(numCourses, prerequisites) {
//     let adjList = {};
//     for (let i = 0; i < numCourses; i++) {
//         adjList[i] = [];
//     }
    
//     for (let i = 0; i < prerequisites.length; i++) {
//         let [to, from] = prerequisites[i];
//         adjList[to].push(from);
//     }
    
//     let processing = new Array(numCourses); // visiting = 1, visited = 2
//     let result = [];
    
//     function dfs(curr) {
//         if (processing[curr] === 1) return true;
//         if (processing[curr] === 2) return false;
        
//         processing[curr] = 1;
//         let edge = adjList[curr];
//         for (let i = 0; i < edge.length; i++) {
//             if (dfs(edge[i])) return true;
//         }
        
//         processing[curr] = 2;
//         result.push(curr);
//         return false;
//     }
    
//     for (var i = 0; i < numCourses; i++) {
//         if (dfs(i)) return [];
//     }
    
//     return result;
// };

const findOrder = (numCourses, prerequisites) => {
    let adjList = {}
    for (let i = 0; i < numCourses; i++) adjList[i] = [];
    for (const [v, e] of prerequisites) {
        adjList[e].push(v);
    }
    
    let inDegrees = new Array(numCourses).fill(0);
    for (let i = 0; i < prerequisites.length; i++) {
        let [v] = prerequisites[i];
        inDegrees[v]++;
    }
    
    const q = [];
    for (let i = 0; i < inDegrees.length; i++) {
        const degree = inDegrees[i];
        if (degree === 0) q.push(i);
    }

    const res = [];
    while(q.length) {
        let node = q.shift();
        res.push(node);
        numCourses--;
        
        let edge = adjList[node];
        for (let i = 0; i < edge.length; i++) {
            let _e = edge[i];
            inDegrees[_e]--;    
            if (inDegrees[_e] === 0) {
                q.push(_e);
            }
        }
    }
    
    return numCourses === 0 ? res : [];
}












