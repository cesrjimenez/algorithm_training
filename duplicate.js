
/**
 *  Get Duplicates
 *
 *  Given an array of values, return only the values that have duplicates in the
 *  array
 *
 *  Parameters
 *  Input: arr {Array}
 *  Output: {Array}
 *
 *  Constraints
 *  Time: O(N)
 *  Space: O(N)
 *
 *  Examples
 *  [1, 2, 4, 2] --> [2]
 *  [3, 2, 3, 2, 3, 3, 4] --> [3, 2]
 *  [1, 2, 3, 4] --> []
 */

// function getDuplicates(arr) {
//   // YOUR WORK HERE
//   const duplicates = [];
//   let seen = new Set();

//   for (let i = 0; i < arr.length; i++) {
//     const curr = arr[i];
//     if (seen.has(curr) && duplicates.indexOf(curr) === -1) {
//       duplicates.push(curr)
//     } else {
//       seen.add(curr)
//     }
//   }

//   return duplicates;
// }

// function getDuplicates(arr) {
//   // YOUR WORK HERE
//   const duplicates = new Set();
//   let seen = new Set();

//   for (let i = 0; i < arr.length; i++) {
//     const curr = arr[i];
//     if (seen.has(curr)) {
//       duplicates.add(curr)
//     } else {
//       seen.add(curr)
//     }
//   }

//   return [...duplicates];
// }

function getDuplicates(arr) {
  // YOUR WORK HERE
  const duplicates = [];
  let seen = new Set();
  const map = {};

  for (let i = 0; i < arr.length; i++) {
    const curr = arr[i];
    if (seen.has(curr) && !map[curr]) {
      duplicates.push(curr)
      map[curr] = true;
    } else {
      seen.add(curr)
    }
  }

  return duplicates;
}

console.log(getDuplicates([1, 2, 4, 2]));
console.log(getDuplicates([3, 2, 3, 2, 3, 3, 4]))
console.log(getDuplicates([1, 2, 3, 4]))
