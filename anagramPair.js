/**
 *  Anagram Pair
 *
 *  Given two strings, determine if the strings are anagrams of one another.
 *
 *  Two words are anagrams of one another if they contain the same letters.
 *
 *  Parameters
 *  Input: str1 {String}
 *  Input: str2 {String}
 *  Output: {Boolean}
 *
 *  Constraints
 *  With N as the length of the first string, and M as the length of the second string.
 *
 *  Time: O(N)
 *  Space: O(N)
 *
 *  Examples
 *  "cat", "act" --> true
 *  "cat", "dog" --> false
 *  "racecar", "aaccrres" --> false
 */

function anagramPair(string1, string2) {
    if (string1.length !== string2.length) {
        return false;
    }
    // YOUR WORK HERE
    const charMapOne = {};
    const charMapTwo = {};
    for (let i = 0; i < string1.length; i++) {
        const currOne = string1[i];
        charMapOne[currOne] = (charMapOne[currOne] || 0) + 1;

        const currTwo = string2[i];
        charMapTwo[currTwo] = (charMapTwo[currTwo] || 0) + 1;
    }

    for (let k in charMapOne) {
        if (!charMapTwo[k]) {
            return false;
        } else {
            charMapOne[k]--;
            if (charMapOne[k] <= 0) {
                delete charMapOne[k];
            }
        }
    }

    return true;
}

console.log(anagramPair("cat", "act"));
console.log(anagramPair("cat", "tac"));
console.log(anagramPair("cat", "dog"));
console.log(anagramPair("racecar", "aaccrres"));