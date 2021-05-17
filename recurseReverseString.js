
/*
 * 2c. Reverse a string
 *
 * Input:   str {String}
 * Output:  {String}
 *
 * Example: reverseString('hello') => 'olleh'
 */
// function reverseString(str){
//     // YOUR WORK HERE
//     let string = '';

//     function recurse(idx, str) {
//         // base case
//         if (idx < 0) return;

//         // action
//         string += str[idx];

//         return recurse(idx-1, str);
//     }

//     recurse(str.length - 1, str);

//     console.log(string);

//     return string;
// }

function reverseString(str){
    let result = '';
    // YOUR WORK HERE
    function recurse(idx) {
        // base case
        if (idx < 0) return;

        // action
        result += str[idx];

        recurse(idx-1);
    }
    recurse(str.length - 1);
    return result;
}



console.log(reverseString('hello'));
