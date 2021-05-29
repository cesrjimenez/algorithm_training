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
-The number of nodes in the tree is in the range [1, 1000].
-100 <= Node.val <= 100

digram:

- input: root = [1,2,2,3,4,4,3]
- output: true

- mirror = 1
- queue = [2]
- curr = 1

   i
[1,2,2,3,4,4,3]

        x 0              1
                   /         \
    l == r        2           2
                /   \        /  \
    l == r      3   4       4    3



 */

function TreeNode(val, left, right) {
  this.val = val === undefined ? 0 : val;
  this.left = left === undefined ? null : left;
  this.right = right === undefined ? null : right;
}

class Queue {
  constructor() {
    this.queue = [];
    this.size = 0;
  }

  enqueue(item) {
    this.queue.unshift(item);
    this.size++;
  }

  dequeue() {
    this.size--;
    return this.queue.pop();
  }
}
// let root =

var isSymmetric = function(root) {
  let q = new Queue();
};
