
/**
 * Letter Sort
 *
 * Given a string of letters, return the letters in sorted order.
 *
 * Parameters
 * Input: str {String}
 * Output: {String}
 *
 * Constraints
 * Time: O(N)
 * Space: O(N)
 *
 * Examples
 * `hello --> ehllo`
 * `whiteboard --> abdehiortw`
 * `one --> eno`
 */

function letterSort(word) {
  let count = Array(256).fill(0);

  for (let i = 0; i < word.length; i++) {
    const char = word.charCodeAt(i);
    count[char]++;
  }

  let out = "";
  for (let i = 0; i <= 255; i++) {
    for (let rep = 0; rep < count[i]; rep++) {
      out += String.fromCharCode(i);
    }
  }

  return out;

}

console.log(letterSort('whiteboard'));
console.log(letterSort('hello'));
console.log(letterSort('one'));