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
    - output: false
    
    
    numCourses = 2, prerequisites = [[1,0]]
    
    adjList = {
      0: [1],
      1: []
    }
    
    topSort = [1,2]
    topSort.length === numCourses // true
    
                    0   
                   /    
                  1    x
  
  > test case #2:
    - input: numCourses = 2, prerequisites = [[1,0],[0,1]]
    - output: false
    
    numCourses = 2, prerequisites = [[1,0],[0,1]]
    
    adjList = {
        0: [1]
        1: [0]
    }
    visited = [1,1]
    topSort = []
    topSort.length === numCourses // false
    
                    0  x
                   /  
                  1   x
  
  pcode:
  - create topSort variable
  - create adjList from prerequisite
  - loop thru prerequisites and populate adjList
  - create visited map
  - create dfsPostOrder function w/ node parameter
    - if visited[node] is 1 return true
    - if visited[node] is 2 return false
    - set visited[node] to 1
    - loop thru node's neighbors
        - if dfsPostOrder of neighbors[i] returns true
            - return true
    - visited[node] to 2
    - push node to topSort
    - return false
  - loop thru numCourses
    - dfsPostOrder w/ numCourses[i]
  - return topSort
 */
var canFinish = function(numCourses, prerequisites) {
    let topSort = []
    let adjList = {};
    for (let i = 0; i < numCourses; i++) {
        adjList[i] = [];
    }
    
    for (let i = 0; i < prerequisites.length; i++) {
        let [to, from] = prerequisites[i];
        adjList[from].push(to)
    }
    
    let visited = new Array(numCourses).fill(0);
    
    function dfsPostOrder(node) {
        if (visited[node] === 1) return true;
        if (visited[node] === 2) return false;
        
        visited[node] = 1;
        
        let neighbors = adjList[node];
        for (let i = 0; i < neighbors.length; i++) {
            if (dfsPostOrder(neighbors[i])) {
                return true;
            }
        }
        
        visited[node] = 2;
        topSort.push(node);
        return false;
    }
    
    for (let i = 0; i < numCourses; i++) {
        if (dfsPostOrder(i)) {
            return false;
        }
    }
    
    return topSort.length === numCourses;
};