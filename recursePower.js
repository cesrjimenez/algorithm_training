/*
 * 2f. Given a base and an exponent, create a function to find the power
 *
 * Input:   base {Integer}
 * Input:   exponent {Integer}
 * Output:  {Integer}
 *
 * Example: power(3, 4) => 81
 *
 * 1 --> 3 --> 9 --> 27 --> 81
 */
function power(base, exponent) {
    // YOUR WORK HERE
    // 1. instantiate variables
    let result = 1;

    // 3. helper method
    // 3a. instantiate
    function recurseHelper(count) {
        // 4. base case
        if (count === exponent) {
            return;
        }

        // 5. recurse action
        result *= base // 3 // 9
        count += 1;

        recurseHelper(count);
    }

    // 3b. invoke
    recurseHelper(0)

    // 2. return variables
    return result;
}

console.log(power(3, 4))