/**
 * @param {number[][]} times
 * @param {number} n
 * @param {number} k
 * @return {number}
 
 constraints:
 - 1 <= k <= n <= 100
 - 1 <= times.length <= 6000
 - times[i].length == 3
 - 1 <= ui, vi <= n
 - ui != vi
 - 0 <= wi <= 100
 - All the pairs (ui, vi) are unique. (i.e., no multiple edges.)
 - time: O((v+e) log v)
 - space: O(v+e)
 
 diagram:
 > test case #1:
    - input: times = [[2,1,1],[2,3,1],[3,4,1]], n = 4, k = 2
    - output: 2
    
    
    times = [[2,1,1],[2,3,1],[3,4,1]], n = 4, k = 2
    
    
    {
    1: []
    2: [1,3]
    3: [4]
    4: []
    }
    
    1 <-- 1 -- 2
               |
               1
               |
               v
    4  <- 1 -  3
    
pcode: 
- create distance map
- create adjacency list
- set all nodes in distance to infinity
- create priority queue
- set distance[start node] to 0
- queue start node in priority queue with 0

- while priority queue is not zero
    - dequeue curr node and curr weight
    - for every one of curr node's neighbors
        - let d = distance[node] + neighbor weight
        - if d < distance[neighbor]
            - set distance[neighbor] to d
- create result variable
- for each of the keys in distance
    - set result to the max of result or distance[key]
- if result is Infinity return -1 otherwise return result

 
 */
// Djikstra's Algorithm
// class QueueItem {
//     constructor(node, weight) {
//         this.node = node;
//         this.weight = weight;
//     }
// }

// class PriorityQueue {
//     constructor() {
//         this.queue = [];
//     }
    
//     enqueue(node, weight) {
//         let item = new QueueItem(node, weight);
//         let isPrioritized = false;
//         for (let i = 0; i < this.queue.length; i++) {
//             if (item.weight < this.queue[i].weight) {
//                 this.queue.splice(i, 0, item);
//                 isPrioritized = true;
//                 break;
//             } 
//         }
        
//         if (!isPrioritized) {
//             this.queue.push(item);
//         }
//     }
    
//     dequeue() {
//         return this.queue.shift();
//     }
    
//     isEmpty() {
//         return this.queue.length === 0;
//     }
// }

// class Graph {
//     constructor() {
//         this.adjList = {};
//     }
    
//     addVertex(v) {
//         this.adjList[v] = [];
//     }
    
//     addEdge(vertex, node, weight) {
//         this.adjList[vertex].push({ node, weight });
//     }
// }

// var networkDelayTime = function(times, n, k) {
//     let distance = {};
//     let graph = new Graph();
    
//     for (let i = 1; i <= n; i++) {
//         graph.addVertex(i);
//         distance[i] = Infinity;
//     }
    
//     for (let i = 0; i < times.length; i++) {
//         let [vertex, node, weight] = times[i];
//         graph.addEdge(vertex, node, weight);
//     }
    
//     let priorityQueue = new PriorityQueue();
//     distance[k] = 0;
//     priorityQueue.enqueue(k, 0);
    
//     while (!priorityQueue.isEmpty()) {
//         let { node } = priorityQueue.dequeue();
//         graph.adjList[node].forEach(neighbor => {
//             let { node: _n, weight: _w } = neighbor;
//             let d = distance[node] + _w;
//             if (d < distance[_n]) {
//                 distance[_n] = d;
//                 priorityQueue.enqueue(_n, d);
//             }
//         })
//     }
    
//     let result = 0;
//     for (let key in distance) {
//         result = Math.max(result, distance[key]);
//     }
    
//     return result === Infinity ? -1 : result;
// };

// Bellman Ford
var networkDelayTime = function(times, n, k) {
    let distance = new Array(n + 1).fill(Infinity);
    distance[k] = 0;
    for (let i = 0; i <= n; i++) {
        for (let j = 0; j < times.length; j++) {
            let [source, target, weight] = times[j];
            if (distance[source] === Infinity) continue;
            let d = distance[source] + weight;
            if (d < distance[target]) {
                distance[target] = d;
            }
        }
    }
    
    let result = 0;
    for (let i = 1; i < distance.length; i++) {
        result = Math.max(result, distance[i])
    }
    
    return result === Infinity ? -1 : result;
}