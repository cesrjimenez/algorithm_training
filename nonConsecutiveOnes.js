// Installed npm packages: jquery underscore request express
// jade shelljs passport http sys lodash async mocha chai sinon
// sinon-chai moment connect validator restify ejs ws co when
// helmet wrench brain mustache should backbone forever debug jsdom

//Given a positive integer n, return an array of all the binary strings of length n that DO NOT contain consecutive 1s.

//Input: n (Integer)
//Output: [Str] (Array of Strings)
//Example
//Input: 2
//Output: ["00", "01", "10"]

//Input: 3
//Output: ["000", "001", "010", "100", "101"]
//Constraints
//Time Complexity: O(2^N)
//Auxiliary Space Complexity: O(2^N)
//The order of the strings in the array does not matter.

//Use recursion to solve this problem.



// Diagram
//Output: ["00", "01", "10"]

//                 ""
//          /             \
//        "0"            "1"
//      /    \
//    "00"  "01"
//   /    \
// "000"  "011"

//Output: ["000", "001", "010", "100", "101"]
//                 ""
//          /             \
//        "0"            "1"
//      /    \            /        \
//    "00"   "01"         "10"     "11"X
//   /    \   /     \      /    \
//"000""001" "011"X "010""100"   "101"


// Base case
// if idx == str lengh return add to output
// if curr idx is one I dont add add one

// recusive relations
// and one to index and add one or zero
// if current index is one then dont add one
// pass in build string

// return output

function nonConsecutiveOnes(n) {
    let output = [];

    function recursion(idx, buildStr) {
      // Base case
      if (n === buildStr.length) {
        output.push(buildStr);
        return;
      }

      // recursive relations
      recursion(idx + 1, buildStr + "0");

      if (buildStr[idx - 1] !== "1") {
        recursion(idx+1, buildStr + "1");
      }

    }

    recursion(0, "")

    // return the output
    return output;
  }

  console.log(nonConsecutiveOnes(4));

  function NonConsecutiveOnes(n) {
    let result = [];

    function recurse(substr) {
      if(substr.length === n) {
        result.push(substr);
        return;
      }
      recurse(substr + 0);
      if(substr[substr.length - 1] !== "1") {
        recurse(substr + 1)
      }
    }

    recurse("");
    return result;
  }










