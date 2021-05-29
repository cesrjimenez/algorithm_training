/**
 * @param {number[]} candies
 * @param {number} extraCandies
 * @return {boolean[]}
 
constraints:
 - 2 <= candies.length <= 100
 - 1 <= candies[i] <= 100
 - 1 <= extraCandies <= 50
 - time: O(n)
 - space: O(n)
 
diagram:
 input: candies = [2,3,5,1,3], extraCandies = 3
 output: [true,true,true,false,true] 
 
 - findMaxCandy - O(n)
 maxCandy = 5
          i 
 [2,3,5,1,3] 
 
 - build result array - O(n)
 maxCandy = 5 
 extraCandy = 3
 needed = 5 - 3 = 2
 result = [true, true, true, false, true]
 
  i
 [2,3,5,1,3]
  
pcode:
- create result variable
- create maxCandy variable
- loop thru candy arr find the max candy
- loop thru candy arr
    - create needed variable
    - if maxCandy minus curr candy is <=  to extraCandy 
        - push true to result variable otherwise push false
- return result variable
 
 */
var kidsWithCandies = function(candies, extraCandies) {
    let result = [];
    let maxCandy = candies[0];
    
    for(let i = 1; i < candies.length; i++) {
        let curr = candies[i];
        maxCandy = Math.max(curr, maxCandy);
    }
    
    for (let i = 0; i < candies.length; i++) {
        let curr = candies[i];
        let needed = maxCandy - curr;
        result.push(needed <= extraCandies)
    }
    
    return result;
};
