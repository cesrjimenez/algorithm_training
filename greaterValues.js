function greaterValues(arr, target) {

    // YOUR WORK HERE
    let floor = 0;
    let ceiling = arr.length - 1;

    if (target > arr[ceiling]) {
      return 0;
    }

    if (target < arr[floor]) {
      return arr.length;
    }

    while (floor < ceiling) {
      let midpoint = Math.floor(floor + ((ceiling - floor) / 2));
      let random = arr[midpoint];

      if (random === target && arr[midpoint + 1] !== random) {
        return arr.length - midpoint - 1;
      }
      if (target > random) {
        floor = midpoint;
        if (random > target) {
          return arr.length - midpoint - 1;
        }
      } else {
        ceiling = midpoint;
      }
      return console.log('dis');
    }
    return 0;
  }

  // console.log('should be 4', greaterValues([1, 2, 3, 5, 5, 7, 9, 10, 11], 5))


  console.log('should be 0', greaterValues([1, 2, 3], 4))