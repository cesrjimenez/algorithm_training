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
 * @return {number}
 
 constraints:
 - time: O(n)
 - space: O(n)
 
 diagram:
 
 test case #1:
 maxDepth=0
 depth=1
                                    1            d=1
 
 
 test case #2:
 maxDepth=3
 depth=3
 
                                    3            d=1
                                /        \       
                               9         20      d=2
                                        /  \     
                                       15   7    d=3
                                       
pcode:
- create depth variable
- create maxDepth variable
- create dfs helper
    - base case:
        - if there is no node return
        - if there is no left and right update max depth vs. depth
    - recursive action:
        - if left dfs w/ left, add one depth
        - if right dfs w/ right, add one depth
- return depth variable
 
 
 
 */
var maxDepth = function(root) {
    let depth = 0;
    let maxDepth = 0;
    
    function dfs(node, d) {
        // base case
        if (!node) {
            return;
        }
        
        if (!node.left && !node.right) {
            maxDepth = Math.max(maxDepth, d);
        }
        
        // recursive action
        if (node.left) {
            dfs(node.left, d+1);
        }
        
        if (node.right) {
            dfs(node.right, d+1);
        }
    }
    
    dfs(root, depth+1);
        
    return maxDepth;
};