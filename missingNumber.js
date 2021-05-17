/**
 * Missing Number
 *
 * Given range of 1 to N and an array of unique integers that are within that
 * range, return the missing integers not found in the array
 *
 * Parameters
 * Input: n {Integer}
 * Input: arr {Array of Integers}
 * Output: {Array of Integers}
 *
 * Constraints
 * Time: O(N)
 * Space: O(N)
 *
 * Examples
 * `4, [1, 4, 2] --> [3]`
 * `8, [4, 7, 1, 6] --> [2, 3, 5, 8]`
 * `6, [6, 4, 2, 1] --> [3, 5]`
 *
 *
 * loop arr from 0 => n
 *   - if index number is not in the array add to result array
 */

 function missingNumber(n, arr) {
    // YOUR WORK HERE
    const missingNums = [];
    for (let i = 1; i <= n; i++) {
        if (arr.indexOf(i) === -1) {
            missingNums.push(i);
        }
    }

    return missingNums;

  }

  console.log(missingNumber(4, [1, 4, 2]));
  console.log(missingNumber(8, [4, 7, 1, 6]));
  console.log(missingNumber(6, [6, 4, 2, 1]));