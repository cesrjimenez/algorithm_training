/**
 * @param {string} firstWord
 * @param {string} secondWord
 * @param {string} targetWord
 * @return {boolean}
 
 constraints:
 - 1 <= firstWord.length, secondWord.length, targetWord.length <= 8
 - firstWord, secondWord, and targetWord consist of lowercase English letters from 'a' to 'j' inclusive.
 - time: O(n)
 - space: O(n)
 
 
 diagram:
 
 > test case #1:
    - input = 
        firstWord = "acb", 
        secondWord = "cba", 
        targetWord = "cdb"
    - output: true
    
    values = 'a b c d e f g h i j';
              0 1 2 3 4 5 6 7 8 9
    
    firstVal = '0'+'2'+'1' = '021' => 21
       i
    "acb"
    
    secondVal = '2'+ '1'+ '0' = '210' => 210
       i
    "cba" 
    
    targetVal = '2' + '3' + '1' = '231' = 231
       i
    "cdb"
    
    firstVal + secondVal = 231
    targetVal = 231
    
    
pcode:
    - create values string 'a - j'
    - create firstVal variable
    - create secondVal variable
    - create targetVal variable
    - loop thru firstWord 
        - for each character add the string reprsentation of the index to fistVal variable
    - loop thru secondWord 
        - for each character add the string reprsentation of the index to secondWord variable
    - loop thru targetWord 
        - for each character add the string reprsentation of the index to targetVal variable
    - convert the string representations to integers and check if they are the same as the integer representation of targetVal
 
 */
var isSumEqual = function(firstWord, secondWord, targetWord) {
    let values = 'abcdefghij';
    let firstVal = '';
    let secondVal = '';
    let targetVal = '';
    
    for (let i = 0; i < firstWord.length; i++) {
        let char = firstWord[i];
        let charIndex = values.indexOf(char);
        firstVal += String(charIndex);
    }
    
    for (let i = 0; i < secondWord.length; i++) {
        let char = secondWord[i];
        let charIndex = values.indexOf(char);
        secondVal += String(charIndex);
    }
    
    for (let i = 0; i < targetWord.length; i++) {
        let char = targetWord[i];
        let charIndex = values.indexOf(char);
        targetVal += String(charIndex);
    }
    
    let sum = Number(firstVal) + Number(secondVal)
    
    return sum === Number(targetVal);
};