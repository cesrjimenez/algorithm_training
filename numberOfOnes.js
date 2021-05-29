function numberOfOnes(arr) {
    // YOUR WORK HERE

    if (arr.indexOf(0) === -1) {
      return arr.length;
    }

    if (arr.indexOf(1) === -1) {
      return 0;
    }

    let floor = 0;
    let ceiling = arr.length - 1;

    while (floor < ceiling) {
      let distance = Math.floor((ceiling - floor) / 2);
      let midpoint = floor + distance;

      let guess = arr[midpoint];

      if(guess === 1) {
        let prev = arr[midpoint - 1];
        if (prev === 0) {
          return arr.length - midpoint - 1;
        }
        ceiling = midpoint;
      } else {
        let next = arr[midpoint + 1];
        if (next === 1) {
          return arr.length - midpoint - 1;
        }
        floor = midpoint;
      }
    }

    return 0;
}

console.log('should be 8', numberOfOnes([0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1]));