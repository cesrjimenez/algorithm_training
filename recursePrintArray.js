
/*
 * 2a. Print each item in an array in order
 *
 * Input:   arr {Array}
 * Output:  {undefined}
 *
 * Example: printArray([1,2,3]) =>
 *          1
 *          2
 *          3
 */
function printArray(arr){
    // YOUR WORK HERE
    function recurse(idx, arr) {
      if (idx === arr.length) return;
      console.log(arr[idx]);
      recurse(idx + 1, arr);
    }

    recurse(0, arr)
}

printArray([1,2,3]);
