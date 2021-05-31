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
 - space: O(1)
 
 diagram:
 - test case #1:
    - depth = 1
    - minDepth = 1

                                3        depth=1
                                
 - test case #2:
    - depth = 2
    - minDepth = 2

                                3         depth=1
                              /   \      
                             9     20     depth=2
                                   / \   
                                  15  7   depth=3
- test case #3:
    - depth = 5
    - minDepth = 5

                                 2             depth=1
                                  \      
                                   3           depth=2
                                    \    
                                     4         depth=3
                                       \   
                                        5      depth=4
                                          \   
                                           6   depth=5
                                        
                                  
pcode:
- create variable depth
- create variable minDepth, set to MAX_VALUE
- recursive function w/ node & depth parameters:
    - base cases:
        - if !node return
        - if !node.left && !node.right update midDepth w/ Math.min of minDepth vs. depth
    - recursive action:
        - recurse node.left with depth + 1
        - recurse node.right with depth + 1
- call recursive function
- return minDepth if it is not MAX_VALUE, otherwise return 0

edge cases:
- there is no root return
 
 */
var minDepth = function(root) {
    let depth = 0;
    let minDepth = Number.MAX_VALUE;
    
    function dfs(node, d) {
        // base case
        if (!node) return;
        if (!node.left && !node.right) {
            minDepth = Math.min(minDepth, d);
        }
        
        // recursive action
        dfs(node.left, d+1);
        dfs(node.right, d+1);
    }
    
    dfs(root, depth+1)
    
    return minDepth !== Number.MAX_VALUE ? minDepth : 0;
};