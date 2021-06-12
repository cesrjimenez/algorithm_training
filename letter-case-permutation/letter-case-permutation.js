/**
 * @param {string} s
 * @return {string[]}
 
 
constraints:
- time: O(2^n)
- space: O(2^n)

diagram:
> test case #1:
    - input: "A1d3"
    - output: ["A1D3", "a1D3", "A1d3", "a1d3"]


                              ""
                      /                \
              "A"                            "a"
               |                              |
              "A1"                           "a1"
        /           \                   /           \
  "A1D"               "A1d"          "a1D"         "a1d"
    |                   |              |              |                 
  "A1D3"              "A1d3"         "a1D3"         "a1d3"

pcode:
- create result array
- create recursive helper function
    - base case:
        - if buildStr is same length as str
            - push buildStr to result and return
    - recursive action
        - if typeof str[idx] == number
            - call recursive function with buildStr + str[idx] and idx+1
        - else
            - call recursive function with buildStr + str[idx].toLowerCase() and idx+1
            - call recursive function with buildStr + str[idx].toUpperCase() and idx+1
- call recursive function w/ buildStr = "" & idx = 0
- return result
 
 */
var letterCasePermutation = function(str) {
    let result = [];
  let seen = new Set();

  function recursion(buildStr, idx) {
    if (buildStr.length === str.length) {
      if (!seen.has(buildStr)) {
        seen.add(buildStr);
        result.push(buildStr);
      }
      return;
    }

    if (typeof str[idx] === "number") {
      recursion(buildStr + str[idx], idx + 1);
    } else {
      recursion(buildStr + str[idx].toLowerCase(), idx + 1);
      recursion(buildStr + str[idx].toUpperCase(), idx + 1);
    }
  }

  recursion("", 0);

  return result;
};