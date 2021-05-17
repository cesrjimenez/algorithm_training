function unique(arr) {
  // YOUR WORK HERE
  const seen = {};
  const unique = arr.filter(item => {
    if(!seen[item]) {
      seen[item] = 1;
      return true;
    }
    return false;
  })

  return unique;
}

function uniqueToo(arr) {
    // YOUR WORK HERE
    const seen = new Set();
    arr.forEach(item => seen.add(item));
    return [...seen];
}

function uniqueThree(arr) {
    // YOUR WORK HERE
    const seen = new Set();
    const unique = [];
    for (let i = 0; i < arr.length; i++) {
        const current = arr[i];
        if (!seen.has(current)) {
            seen.add(current);
            unique.push(current);
        }
    }
    return unique;
}

console.time();
console.log(unique([1, 2, 4, 4, 5, 6]))
console.log(unique([1, 1, 2, 2, 3, 3]))
console.log(unique([1, 2, 3, 1, 2]))
console.timeEnd();

console.time();
console.log(uniqueToo([1, 2, 4, 4, 5, 6]))
console.log(uniqueToo([1, 1, 2, 2, 3, 3]))
console.log(uniqueToo([1, 2, 3, 1, 2]))
console.timeEnd();

console.time();
console.log(uniqueThree([1, 2, 4, 4, 5, 6]))
console.log(uniqueThree([1, 1, 2, 2, 3, 3]))
console.log(uniqueThree([1, 2, 3, 1, 2]))
console.timeEnd();