function wordCount(sentence) {
  // YOUR WORK HERE
  const seen = {};
  let startIndex = 0;
  for (let i = 0; i < sentence.length; i++) {
    const currChar = sentence[i];
    if (currChar === '\'') {
        const w = sentence.slice(startIndex, i).toLowerCase();
        const s = sentence.slice(i+1, i+2);
        const word = w+s;
        startIndex = i + 2;
        if (word in seen) {
          seen[word] += 1;
        } else {
          seen[word] = 1;
        }
    } else if (currChar === ' ' || currChar === '.' ||currChar === '!' || currChar === ',' || i === sentence.length) {
      const word = sentence.slice(startIndex, i).toLowerCase();

      startIndex = i + 1;
      if (word in seen) {
        seen[word] += 1;
      } else {
        if (word === "") continue;
        seen[word] = 1;
      }
    }
  }
  return seen;
}

console.log(wordCount('The cat and the hat.'));
console.log(wordCount('As soon as possible.'));
console.log(wordCount("It's a man, it's a plane, it's superman!"));

console.log(JSON.stringify(wordCount('The cat and the hat.')) === JSON.stringify({ the: 2, cat: 1, and: 1, hat: 1 }));