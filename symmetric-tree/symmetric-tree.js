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
 * @return {boolean}
  
constraints:
- The number of nodes in the tree is in the range [1, 1000].
- 100 <= Node.val <= 100
- time: O(n)
- space: O(n)


digram:
- input: root = [1,2,2,3,4,4,3]
- output: true

- queueOne = [3,4]
- queueTwo = [3,4]
- currOne = 2
- currTwo = 2

     i
[1,2,2,3,4,4,3]
                   L         R
 
                         1
                    /         \
                   2           2
                 /   \        /  \
                3    4       4    3
               /\    /\      /\   /\
              5  6  7  8     8 7  6 5

 pcode:
 - create queue one and two
 - add first node to both queues
 - while queue one is not empty
    - dequeue nodeOne from one
    - dequeue nodeTwo from two
    - check for null
    - if nodeOne val is not equal to nodeTwo val return false
    - if nodeOne 
        - enqueue nodeOne.left
        - enqueue nodeOne.right
    - if nodeTwo 
        - enqueue nodeTwo.right
        - enqueue nodeTwo.left
 - return true
 
 */

class Queue {
    constructor() {
        this.queue = [];
        this.size = 0;
    }
    
    enqueue(node) {
        this.queue.unshift(node);
        this.size++;
    }
    
    dequeue() {
        this.size--;
        return this.queue.pop();
    }
}

var isSymmetric = function(root) {
    let qOne = new Queue();
    let qTwo = new Queue();
    
    qOne.enqueue(root);
    qTwo.enqueue(root);
    
    while (qOne.size >= 0) {
        let nodeOne = qOne.dequeue();
        let nodeTwo = qTwo.dequeue();
        
        let nodeOneValue = nodeOne ? nodeOne.val : null;
        let nodeTwoValue = nodeTwo ? nodeTwo.val : null;
        
        if (nodeOneValue !== nodeTwoValue) {
            return false;
        }
        
        if (nodeOne) {
            qOne.enqueue(nodeOne.left);
            qOne.enqueue(nodeOne.right);
        }
        
        if (nodeTwo) {
            qTwo.enqueue(nodeTwo.right);
            qTwo.enqueue(nodeTwo.left);
        }
    }
    
    return true;
    
};
