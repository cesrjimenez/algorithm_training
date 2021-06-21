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
 - The number of nodes in the tree is in the range [2, 100].
 - 0 <= Node.val <= 105
 
 diagram:
 > test case #1:
     - input: root = [4,2,6,1,3]
     - output: 1
     
    minDiff = 1
    q = [
    
    
    
    
    ]
    
    unshifted = [3, 2]
    diff = |child - parent|
    diff = 1
    minDiff = diff or minDiff
    
         
                                   4          
                                /      \       
                               2        6     
                              / \            
                             1   3   

> test case #2:
    - input: root = [90,69,null,49,89,null,52]
    - output: 1
    
                                                90
                                            /        \
                                           69    
                                          /  \
                                         49   89
                                        /
                                      52


pcode:
- create minDiff variable set to MAX_VALUE
- create queue
- push [root node, [MAX_VALUE]] to queue
- while queue is not empty
    - set [curr, [parent]] to shift from queue
    - loop thru parent array
        - get the absolute difference between child & parent[i]
        - set minDiff to the min between diff and minDiff
    - if curr has left
        - let leftParents = [...parent, curr.val]
        - push [curr.left, leftParents] to queue
    - if curr has right
        - let rightParent = [...parent, curr.val]
        - push [curr.right, rightParent] to queue
- return minDiff
    
                            
 */
var minDiffInBST = function(root) {
    let minDiff = Number.MAX_SAFE_INTEGER;
    let queue = [];
    queue.push([root, [Number.MAX_SAFE_INTEGER]]);
    
    while (queue.length > 0) {
        let [curr, parentVals] = queue.shift();
        for (let i = 0; i < parentVals.length; i++) {
            let diff = Math.abs(curr.val - parentVals[i]);
            minDiff = Math.min(diff, minDiff);
        }
        
        if (curr.left) {
            let leftParents =  [...parentVals, curr.val]
            queue.push([curr.left, leftParents]);
        }
        
        if (curr.right) {
            let rightParents =  [...parentVals, curr.val]
            queue.push([curr.right, rightParents])
        }
    }
    
    return minDiff;
};

