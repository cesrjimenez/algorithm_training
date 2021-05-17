
/*
 * 2g. Merge two sorted arrays
 *
 * Input:   arr1 {Array}
 * Input:   arr2 {Array}
 * Output:  Array
 *
 * Example: merge([1, 4, 7], [2, 3, 6, 9]) => [1, 2, 3, 4, 6, 7, 9]
 *
 *
 *
 */
function merge(arr1, arr2){
    // YOUR WORK HERE
    // 1. instantiate variables
    let result = [];

    function compare(i, j) {
      // base cases
      if (i >= arr1.length) {
        while (j < arr2.length) {
          result[i + j] = arr2[j];
          j++;
        }
        return;
      }

      if (j >= arr2.length) {
        while (i < arr1.length) {
          result[i + j] = arr1[i];
          i++;
        }
        return;
      }

      // recursive relations
      if (arr1[i] < arr2[j]) {
        result[i + j] = arr1[i];
        compare(i + 1, j);
      } else {
        result[i + j] = arr2[j];
        compare(i, j+1);
      }
    }

    // invoke results
    compare(0, 0)

    // 2. return results
    return result;
}

console.log(merge([1, 4, 7], [2, 3, 6, 9]));
