/**
 * @param {number} n
 * @param {number[][]} flights
 * @param {number} src
 * @param {number} dst
 * @param {number} k
 * @return {number}
 */

/*
Nuance of the K stops:

Nice solution. Add some comment for clarification.
temp array is needed here since in (i)th iteration, 
we only want to relax nodes that are reachable from previous (i-1) iteration, 
this differs from original Bellman-Ford code since now we have within K stops requirement.
*/

var findCheapestPrice = function(n, flights, src, dst, k) {
    let distance = new Array(n).fill(Infinity);
    distance[src] = 0;
    
    for (let i = 0; i < k + 1; i++) {
        let tempK = [...distance];
        for (let j = 0; j < flights.length; j++) {
            let [from, to, price] = flights[j];
            if (distance[from] === Infinity) continue;
            let d = distance[from] + price;
            if (d < tempK[to]) {
                tempK[to] = d;
            }
        }
        distance = [...tempK];
    }
    
    return distance[dst] != Infinity ? distance[dst] : - 1; 
}
