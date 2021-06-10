/**
 * @param {number[][]} image
 * @return {number[][]}
 
 
 constraints:
 - time: O(n*m)
 - space: O(1)
 
 diagram:
 > test case #1: 
 - input: image = [[1,1,0],[1,0,1],[0,0,0]]
 - output: [[1,0,0],[0,1,0],[1,1,1]]
 
 
 
 result = []
                             i
           j 
 image = [[1,1,0],[1,0,1],[0,0,0]]
 
 // reverse row then invert image
                              i
                               j 
 image = [[1,0,0],[0,1,0],[1,1,1]]

> test case #2:
- input: image = [[1,1,0,0],[1,0,0,1],[0,1,1,1],[1,0,1,0]]
- output: [[1,1,0,0],[0,1,1,0],[0,0,0,1],[1,0,1,0]]


            i 

image = [[1,1,0,0],[1,0,0,1],[0,1,1,1],[1,0,1,0]]

// reverse row = image[i]
// invert image[i]
                                        i
                j                              
        [[1,1,0,0],[1,0,0,1],[1,1,1,0],[0,1,0,1]]

pcode:
- loop thru each row
    - reverse the array
    - loop thru each item
        - if its 1 make it a 0 otherwise make it a 1
 
 
 
 
 */
var flipAndInvertImage = function(image) {
    for (let i = 0; i < image.length; i++) {
        image[i].reverse();
        for (let j = 0; j < image[i].length; j++) {
            image[i][j] = image[i][j] === 1 ? 0 : 1;
        }
    }
    return image;
};