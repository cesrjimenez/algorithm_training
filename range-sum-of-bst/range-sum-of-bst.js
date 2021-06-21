/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} low
 * @param {number} high
 * @return {number}
 
 
 constraints:
 - The number of nodes in the tree is in the range [1, 2 * 104].
 - 1 <= Node.val <= 105
 - 1 <= low <= high <= 105
 - All Node.val are unique.
 
 diagram:
 - input: root = [10,5,15,3,7,null,18], low = 7, high = 15
 - output: 32
 
 result = 32
 q = [
 
 
 
 
 ]
 
 pop = 18
 
 
                             10
                        /          \
                       5           15
                    /     \          \
                  3       7          18
                
pcode:
- create result variable
- create queue
- add root node to queue
- while queue is not empty
    - create curr with shift from queue
    - if curr is >= to low and curr <= high
        - result += curr
    - if curr has left
        - queue push curr.left
    - if curr has right
        - queue push curr.right
- return result

 */

var rangeSumBST = function(root, low, high) {
    let result = 0;
    let queue = [];
    queue.push(root);
    
    while (queue.length > 0) {
        let curr = queue.shift();
        
        if (curr.val >= low && curr.val <= high) {
            result += curr.val;
        }
        
        if (curr.left) {
            queue.push(curr.left);
        }
        
        if (curr.right) {
            queue.push(curr.right);
        }
    }
    
    return result;
};