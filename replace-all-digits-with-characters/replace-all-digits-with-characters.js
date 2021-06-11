/**
 * @param {string} s
 * @return {string}
 
 constraints:
 - 1 <= s.length <= 100
 - s consists only of lowercase English letters and digits.
 - shift(s[i-1], s[i]) <= 'z' for all odd indices i.
 - time: O(n)
 - space: O(n)
 
 diagram:
 > test case #1:
    - input: s = "a1c1e1"
    - output: "abcdef"
    
    inPlace = 
          i
    s = "a1c1e1"
    
    
  pcode:
  - create strArr variable to leverage array insertion w/ str.split('')
  - loop thru strArr
    - if !(i % 2 == 0)
        - strArr[i] = shift(strArr[i-1], strArr[i])
  - return strArr.join('')
    
    
 */
function shift(letter, number) {
    let alphabet = 'abcdefghijklmnopqrstuvwxyz';
    let letterIdx = Number(alphabet.indexOf(letter)) + Number(number);
    return alphabet[letterIdx];
}


var replaceDigits = function(s) {
    let strArr = s.split('');
    for (let i = 0; i < strArr.length; i++) {
        if (!(i % 2 === 0)) {
            let letter = shift(strArr[i-1], strArr[i]);
            strArr[i] = letter;
        }
    }  
    
    return strArr.join('');
};