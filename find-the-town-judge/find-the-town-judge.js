/**
 * @param {number} n
 * @param {number[][]} trust
 * @return {number}
 
 constraints:
 - 1 <= n <= 1000
 - 0 <= trust.length <= 104
 - trust[i].length == 2
 - trust[i] are all different
 - trust[i][0] != trust[i][1]
 - 1 <= trust[i][0], trust[i][1] <= n
 - time: O(v+e)
 - space: O(1)
 
 diagram:
 > test case #1:
    - input: n = 2, trust = [[1,2]]
    - output: 2
    
    n = 2, 
    trust = [[1,2]]
    trusted = {
        2: 1,
    }
    
    
    adjacencyList = {
     1: [2],
     2: []
    }
    
    result = 2;
    
> test case #2:
    - input: n = 3, trust = [[1,3],[2,3]]
    - output: 3
    
    n = 3
    trust = [[1,3],[2,3]]
    trusted = {
        3: 2
    }
    
    adjacencyList = {
        1: [3]
        2: [3]
        3: []
    }
    
    result = 3
    
>test case #3:
    - input: n = 3, trust = [[1,3],[2,3],[3,1]]
    - output: - 1
    
    
    n = 3, 
    trust = [[1,3],[2,3],[3,1]]
    trusted = {
        1: []
        3: 2
    }
    
    adjacencyList = {
        1: [3]
        2: [3]
        3: [1]
    }
    
    result =  -1
    
> test case #4:
    - input: n = 3, trust = [[1,2],[2,3]]
    - output: -1
    
     n = 3, 
     trust = [[1,2],[2,3]]
     
    trusted = {
        2: 1
        3: 1
    }
    
    aL = {
     1: [2]
     2: [3]
     3: []
    }
    
pcode:
- create adjacencyList {}
    -  loop thru 1 -> n inclusive
        - adJL[i] = []
    - loop thru trust list and populate adjacencyList
        - let [v, e] = trust[i];
        - adjL[v].push(e);
- create trusted map
- loop thru adjL keys
    - add each neighbor to trusted map + 1
- loop thru adjL
    - if no neighbors 
        - if key in trusted === n - 1
            - return key
      
- return -1

 
 */
var findJudge = function(n, trust) {
    if (!trust.length && n === 1) {
        return n;
    }
    
    let adjacencyList = {}
    for (let i = 1; i <= n; i++) {
        adjacencyList[i] = [];
    }
    
    for (let i = 0; i < trust.length; i++) {
        let [v, e] = trust[i];
        adjacencyList[v].push(e);
    }
    
    let trusted = {};
    for (let key in adjacencyList) {
        adjacencyList[key].forEach(neighbor => {
            trusted[neighbor] = (trusted[neighbor] || 0) + 1;
        })
    }
    
    let allButJudge = n - 1;
    for (let key in adjacencyList) {
        if (!adjacencyList[key].length && trusted[key] === allButJudge) {
            return key;
        }
    }
    
    return -1;
};