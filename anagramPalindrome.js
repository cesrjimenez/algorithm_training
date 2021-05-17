
/**
 *  Anagram Palindrome
 *
 *  Given a string, determine if the string can be rearranged to form a palindrome.
 *
 *  A palindrome is a word that is the same as its reversed. For example: "racecar"
 *  and "noon" are palindromes because they match their reversed version
 *  respectively. On the other hand, "cat" is not a palindrome because "cat"
 *  does not equal "tac".
 *
 *  Parameters
 *  Input: str {String}
 *  Output: {Boolean}
 *
 *  Constraints
 *
 *  Assume the string only contains lowercase letters and no spaces.
 *
 *  Time: O(N)
 *  Space: O(1)
 *
 *  Examples
 *  `"carrace" --> true ("carrace" can be rearranged to "racecar")`
 *  `"cat" --> false`
 */


function anagramPalindrome(string) {
    // YOUR WORK HERE
    let seen = new Set();
    for (let i = 0; i < string.length; i++) {
        const curr = string[i];
        if (seen.has(curr)) {
            seen.delete(curr);
        } else {
            seen.add(curr);
        }
    }

    return seen.size <= 1;
}

console.log(anagramPalindrome('carrace'));
console.log(anagramPalindrome('cat'));
console.log(anagramPalindrome('caca'));