/**
 * @param {string} address
 * @return {string}
 
 
 
 constraints: 
 - time: O(n)
 - space: O(n)
 
 diagram:
 > test case #1:
    - input: address = "1.1.1.1"
    - output: "1[.]1[.]1[.]1"
    
    address = "1.1.1.1"
                     i
                     
pcode:
- create result variable
- loop thru address
    - if address[i] == "."
        - add result += "[.]"
        - continue
    - result += address[i]
- return result

 */
var defangIPaddr = function(address) {
    let result = "";
    for (let i = 0; i < address.length; i++) {
        if (address[i] === ".") {
            result += "[.]";
            continue;
        }
        
        result += address[i];
    }
    
    return result;
};