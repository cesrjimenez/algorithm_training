/**
 * @param {number[]} arr
 * @param {number} a
 * @param {number} b
 * @param {number} c
 * @return {number}
 
 constraints:
 - 3 <= arr.length <= 100
 - 0 <= arr[i] <= 1000
 - 0 <= a, b, c <= 1000
 - time: O(n^2)
 - space: O(n)
 
 diagram:
 > test case #1: O(n^2)
    - input: arr = [3,0,1,1,9,7], a = 7, b = 2, c = 3
    - output: 4
    
    
    good = ()
    
    a = 7, b = 2, c = 3
           i j       k
    arr = [3,0,1,1,9,7]
 
    3 - 0 = 3 <= 7 y
    0 - 1 = 1 <= 2 y
    1 - 3 = 2 <= 3 y 
    
pcode:
- create result variable 
- loop thru arr as i
    - loop thru arr as j
        - if |arr[i] - arr[j]| >= a continue
            -  loop thru arr as k
                - if |arr[j] - arr[k]| >= b continue
                - if |arr[i] - arr[k]| <= c
                    - result++
- return result
 
 */
var countGoodTriplets = function(arr, a, b, c) {
    let result = 0;
    
    for (let i = 0; i < arr.length; i++) {
        for (let j = i + 1; j < arr.length; j++) {
            if (Math.abs(arr[i] - arr[j]) > a) continue
            for (let k = j + 1; k < arr.length; k++) {
                if (Math.abs(arr[j] - arr[k]) > b) continue
                if (Math.abs(arr[i] - arr[k]) <= c) result++;
            }
        }
    }
    
    return result;
    
};