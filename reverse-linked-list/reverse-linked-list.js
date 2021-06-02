/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */

/**
 * @param {ListNode} head
 * @return {ListNode}
 
 constraints:
 - The number of nodes in the list is the range [0, 5000].
 - 5000 <= Node.val <= 5000
 - time: O(n)
 - space: O(n)
 
 diagram:
 - test case #1:
 
   1 -> 2 -> 3 -> 4 -> 5
        n
    c  
p
          
- test case #2:
          
 <- 1 <- 2        
            n
            c
         p        
          
 pcode:
 - edge case:
    - if no head return empty array
 - create previous set to null
 - create current set to head
 - while current is not null
    - create next set to current.next
    - set current.next to previous
    - set previous to current
    - set current to next
 - return previous
  
 */

var reverseList = function(head) {
    let previous = null;
    let current = head;
    
    while (current !== null) {
        let next = current.next;
        current.next = previous;
        previous = current;
        current = next;
    }
    
    return previous;
};
