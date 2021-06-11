/**
 * @param {string} s
 * @return {number}
 
 constraints:
 - s contains only lowercase English letters.
 - 1 <= s.length <= 10^5
 - time: O(n^2)
 - space: O(n)
 
 diagram:
> test case #1: O(n^2)
    - input: s = "aacaba"
    - output: 2
    
    result = 2
    
    qSet = ac // 2
    pSet = ba // 2
     
             
    [[a], [acaba]], 
    [[aa], [caba]]
    [aac, aba]
    [aaca, ba]
    
    [aacab, a]
    p= a
    q= acaba
    
              i
    s = "aacaba"
    
    
> test case #1: O(n)
    - input: s = "aacaba"
    - output: 2
    
    // fill left side
    - p = [1, 1, 2, 2, 3, 3]
    - setP = {acb}
                       i
    - input: s = "aacaba"
    
    // fill right side
    - q = [3,3,3,2,2,1]
    - setQ = {a,b,c}
                   i
    - input: s = "aacaba"
    
    result = 2
    
    // now that I have both sides
                          i
    - p = [1, 1, 2, 2, 3, 3]
                             j
    - q = [3, 3, 3, 2, 2, 1]
    
    "aac aba"
                  i
    - input: s = "aacaba"
    
    
pcode O(n^2):
- create result variable
- create pSet variable
- create qSet variable
- loop thru s length
    - from 0 to i add to pSet
    - from i+1 to length of s - 1 add to qSet
    - if pSet size equals qSet size
        - increase result by 1
- return result

pcode O(n):
- create pSet variable
- create p array length of s
- create qSet variable
- create result variable
- loop s from 0 to s.length
    - add s[i] to pSet
    - set p[i] to pSet.size
- loop s from s.length to 0
    - add s[i] to qSet
    - set q[i] to qSet.size
- loop thru s
    - if s[i] === p[i + 1] 
        - then add one to result
- return result
    
 */
// O(n^2)
// var numSplits = function(s) {
//     let result = 0;
    
//     for (let i = 0; i < s.length; i++) {
//         tempP = s.slice(0, i + 1).split('');        
//         let pSet = new Set(tempP);

        
//         tempQ = s.slice(i, s.length).split('');
//         let qSet = new Set(tempQ);
        
        
//         if (pSet.size === qSet.size) {
//              result++;
//         }
//     }
    
//     return result;
// };

// O(n)
var numSplits = function(s) {
    let pSet = new Set();
    let p = new Array(s.length).fill(0);
    
    let qSet = new Set();
    let q = new Array(s.length).fill(0);
    
    let result = 0;
    
    for (let i = 0; i < s.length; i++) {
        pSet.add(s[i]);
        p[i] = pSet.size;
    }
    
    for (let j = s.length - 1; j >= 0; j--) {
        qSet.add(s[j]);
        q[j] = qSet.size;
    }
    
    for (let i = 0; i < s.length; i++) {
        if(p[i] === q[i + 1]) {
            result++;
        }
    }
    
    return result;
    
};

























