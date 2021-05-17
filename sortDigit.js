
/**
 * Sort Digits
 *
 * Given an integer, sort the digits in ascending order and return the new integer.
 * Ignore leading zeros.
 *
 * Parameters
 * Input: num {Integer}
 * Output: {Integer}
 *
 * Constraints
 * Do not convert the integer into a string or other data type.
 *
 * Time: O(N) where N is the number of digits.
 * Space: O(1)
 *
 * Examples
 * 8970 --> 789
 * 32445 --> 23445
 * 10101 --> 111
 */

// CORRECT WITH MAP
// function sortDigits(x) {
//     let digitCounts = new Map();
//     let sorted = '';

//     while (x > 0) {
//         let digit = x % 10;
//         let currentCount = digitCounts.get(digit);
//         if (currentCount == undefined) {
//             currentCount = 0;
//         }
//         digitCounts.set(digit, currentCount + 1);
//         x = Math.floor(x / 10);
//     }

//     for (let i = 1; i < 10; i++) {
//         let count = digitCounts.get(i);
//         if (count == null) {
//             continue;
//         }
//         for (let j = 0; j < digitCounts.get(i); j++) {
//             sorted += `${i}`;
//         }
//     }

//     return sorted;
// }

function sortDigits(number) {
    let store = 0

    /*
     * A simple method that constructs a new number, excluding the digit that was found
     * to be smallest and added to the store. The new number gets returned so that
     * smallest digit in the returned new number be found.
     */
    function getReducedNumber(number, digit) {
        console.log("Remove " + digit + " from " + number);
        let newNumber = 0;

        //flag to make sure we do not exclude repeated digits, in case there is 44
        let repeatFlag = false;
        while(number > 0) {
            let t = number % 10;

            //assume in loop one we found 1 as smallest, then we will not add one to the new number at all
            if (t != digit) {
                newNumber = (newNumber * 10) + t;
            } else if (t == digit) {
                if (repeatFlag) {
                    console.log("Repeated min digit " + t + "found. Store is : " + store);
                    store = (store * 10) + t;
                    console.log("Repeated min digit " + t + "added to store. Updated store is : " + store);
                    //we found another value that is equal to digit, add it straight to store, it is
                    //guaranteed to be minimum
                } else {
                    // skip the digit because its added to the store, in main method, set flag so
                    // if there is repeated digit then this method add them directly to store
                    repeatFlag = true;
                }
            }
            number = Math.floor(number/10);
        }
        console.log("Reduced number is : " + newNumber);
        return newNumber;
    }

    while (number > 0) {
        // digit by digit - get last most digit
        let digit = number % 10;

        console.log("Last digit is : " + digit + " of number : " + number);

        // get the whole number minus the last most digit
        let temp = Math.floor(number / 10);

        // loop through number minus the last digit to compare
        while(temp > 0) {
            console.log("Subchunk is " + temp);
            // get the last digit of this sub-number
            let t = temp % 10;

            // compare and find the lowest
            // for sorting descending change condition to t > digit
            if(t < digit) {
                digit = t;
            }

            // divide the number and keep loop until the smallest is found
            temp = Math.floor(temp / 10);
        }
        console.log("Smalled digit in " + number  + " is " + digit);

        // add the smallest digit to store
        store = (store * 10) + digit;

        console.log("Store is : " + store);

        // we found the smallest digit, we will remove that from number and find the
        // next smallest digit and keep doing this until we find all the smallest
        // digit in sub chunks of number, and keep adding the smallest digits to store
        number = getReducedNumber(number, digit);
    }

    console.log("Ascending order of " + original + " is " + store);
    return store;
}




console.log(sortDigits(8970));
console.log(sortDigits(32445));
console.log(sortDigits(10101));