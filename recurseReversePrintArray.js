
/*
 * 2b. Print each item in an array backwards
 *
 * Input:   arr {Array}
 * Output:  {undefined}
 *
 * Example: printReverse([1,2,3]) =>
 *          3
 *          2
 *          1
 */
function printReverse(arr) {
    // YOUR WORK HERE
    function recurse(idx, arr) {
        if (idx < 0) return;
        console.log(arr[idx]);
        recurse(idx - 1, arr);
      }

      recurse(arr.length - 1, arr)
}


printReverse([1,2,3]);