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
//     let adjList = new Array(numCourses);
//     for (let i = 0; i < numCourses; i++) {
//         adjList[i] = [];
//     }
    
//     for (let i = 0; i < prerequisites.length; i++) {
//         let [to, from] = prerequisites[i];
//         adjList[to].push(String(from));
//     }

//     let processing = new Array(numCourses);
//     let result = [];
    
//     function dfs(curr) {
//         if (processing[curr] === 1) {
//             return true;
//         }
        
//         if (processing[curr] === 2) {
//             return false;
//         }
        
//         processing[curr] = 1;
        
//         adjList[curr].forEach(neighbor => {
//            if (dfs(neighbor)) return true;
//         });
        
//         processing[curr] = 2;
//         result.push(curr);
//     }
    
//     for (var i = 0; i < numCourses; i++) {
//         if (dfs(i)) return [];
//     }
    
//     return result;
// };

var findOrder = function(numCourses, prerequisites) {
    var graph = new Array(numCourses);
    for (var i = 0; i < numCourses; i++) graph[i] = [];
    var len = prerequisites.length;
    for (var i = 0; i < len; i++) {
        var item = prerequisites[i];
        if (item[1] >= numCourses) return [];
        graph[item[0]].push(item[1]);
    }
    
    // empty: other
    // 1: visiting
    // 2: visited
    var status = new Array(numCourses);
    var result = [];
    var hasCircle = function(current) {
        if (status[current] === 1) return true;
        if (status[current] === 2) return false;
        
        status[current] = 1; // start visiting
        for (var next of graph[current]) {
            if (hasCircle(next)) return true;
        }
        status[current] = 2; // end visiting
        result.push(current);
    }
    
    for (var i = 0; i < numCourses; i++) {
        if (hasCircle(i)) return [];
    }
    return result;
};














