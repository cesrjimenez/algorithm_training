/**
 * @param {number[][]} accounts
 * @return {number}
 
 constraints:
 - m == accounts.length
 - n == accounts[i].length
 - 1 <= m, n <= 50
 - 1 <= accounts[i][j] <= 100
 - time: O(m*n)
 - space: O(1)
 
 diagram:
 > test case #1:
    - input: accounts = [[1,5],[7,3],[3,5]]
    - output: 10
    
    maxWealth = 10
    localWealth = 8
    
                             i
    accounts = [[1,5],[7,3],[3,5]]
                               j  

pcode:
- create maxWealth variable
- loop thru customer i
    - create localWealth variable set to 0
    - loop thru bank account j
        - localWealth += account[i][j]
        - maxWealth = Math.max(maxWealth, localWealth)
- return maxWealth
    
 */
var maximumWealth = function(accounts) {
    let maxWealth = 0;
    for (let i = 0; i < accounts.length; i++) {
        let localWealth = 0;
        for (let j = 0; j < accounts[i].length; j++) {
            localWealth += accounts[i][j];
        }
        maxWealth = Math.max(maxWealth, localWealth);
    }
    
    return maxWealth;
};


