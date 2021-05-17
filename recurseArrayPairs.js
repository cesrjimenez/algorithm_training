
/*
 * 2d. Given an array of integers, create an array of two-item arrays
 *
 * Input:   arr {Array}
 * Output:  {Array}
 *
 * Example: arrayPairs([1, 2, 3, 4, 5, 6])  =>    [[1,2], [3,4], [5,6]]
 * Example: arrayPairs([1, 2, 3, 4, 5])     =>    [[1,2], [3,4], [5, undefined]]
 */
function arrayPairs(arr) {
  // YOUR WORK HERE
  let result = [];

  function traverse(idx) {
    // base case
    if (idx >= arr.length) return;

    // action
    result.push([arr[idx], arr[idx + 1]]);

    // recurse
    traverse(idx + 2);

    // return variable
    return result;

  }

  traverse(0);

  return result;
}

console.log(arrayPairs([1, 2, 3, 4, 5, 6]));

