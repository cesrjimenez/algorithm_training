
/*
 * 2e. Flatten a nested array
 *
 * Input:   arr {Array}
 * Output:  {Array}
 *
 * Example: flatten([1, [2, 3, [4]], 5, [[6]]]) => [1, 2, 3, 4, 5, 6]
 *
 * Diagram
 * *                               [
 *                                   1,
 *                                   [2, 3, [4]],
 *                                   5,
 *                                   [[6]]
 *                                  ]
 *                               [1, [2, 3, [4]], 5, [[6]]]
 *
 *
 *
 *
 *
 */
function flatten(arr){
    // YOUR WORK HERE
    // 1. instantiate variables
    let output = [];

    // 3. Helper method
    // 3a. Instantiate
    function recurseHelper(idx, arr) {
        // 4. Base case
        if (idx >= arr.length) {
            return;
        }
        // 4. Base case
        if (!Array.isArray(arr[idx])) {
            output.push(arr[idx]);
        } else {
            // 5. Recurse action
            recurseHelper(0, arr[idx]);
        }

        // 5. Recurse action
        recurseHelper(idx+1, arr);
    }

    // 3b. Invoke
    recurseHelper(0, arr);

    // 2. return results
    return output;

}

console.log(flatten([1, [2, 3, [4]], 5, [[6]]]));
