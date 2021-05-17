
/**
 * Character Mode
 *
 * Given a string, find the most frequent occurring letter(s) in the string
 *
 * Parameters
 * Input: str {String}
 * Output: {String}
 *
 * Constraints
 * If more than one letter is tied for the most frequent, return a string of all
 * the letters in one string.
 *
 * Upper case characters should count as lower case, and do not include spaces
 * ... as characters.
 *
 * Time: O(N)
 * Space: O(N)
 *
 * Examples
 * 'hello' --> 'l'
 * 'A walk in the park' --> 'a'
 * 'noon' --> 'no'
 */

 function characterMode(string) {
    // YOUR WORK HERE
    const map = {};
    for (let i = 0; i < string.length; i++) {
        const curr = (string[i]).toLowerCase();
        if (curr === ' ') continue;

        map[curr] = (map[curr] || 0) + 1
    }

    let maxChars = '';
    let maxValue = 0;
    for (let k in map) {
        const currCount = map[k];
        if (currCount === maxValue) {
            maxChars += k;
            maxValue = currCount;
        } else if (currCount > maxValue) {
            maxChars = k;
            maxValue = currCount;
        }
    }

    return maxChars;
}


console.log(characterMode('hello'));
console.log(characterMode('A walk in the park'));
console.log(characterMode('noon'));
