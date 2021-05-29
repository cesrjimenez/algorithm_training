function closestValue(arr, target) {
  // YOUR WORK HERE
  let floor = 0;
  let ceiling = arr.length - 1;
  let result = -1;

  while (floor < ceiling) {
    let midpointIndex = Math.floor(floor + ((ceiling - floor) / 2));
    let mid = arr[midpointIndex];

    if (mid === target) {
      return mid;
    }

    if (ceiling - floor === 1) {
      let diffCeiling = Math.abs(arr[ceiling] - target);
      let diffFloor = Math.abs(arr[floor] - target);
      if (diffCeiling < diffFloor) {
        return arr[ceiling];
      } else {
        return arr[floor];
      }
    }
    // 72 >   70
    if (target > mid) {
        floor = midpointIndex;
    } else if (target < mid) {
        ceiling = midpointIndex;
    } else {
        return -1
    }
}

  return result;
}


console.log(closestValue([1, 2, 3, 5, 5, 7, 9, 10, 11], 6))

/**

 * target = 6
 *
 *
 *               f  m  c
 *  [1, 2, 3, 5, 5, 7, 9, 10, 11]
 *
 *
 *
 *
 */