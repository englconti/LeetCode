// Input: l1 = [2,4,3], l2 = [5,6,4]
// Output: [7,0,8]
// Explanation: 342 + 465 = 807.
// Example 2:

// Input: l1 = [0], l2 = [0]
// Output: [0]
// Example 3:

// Input: l1 = [9,9,9,9,9,9,9], l2 = [9,9,9,9]
// Output: [8,9,9,9,0,0,0,1]

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function(l1, l2) {
    const l1Reversed = l1.map((num, index, array) => array[array.length - (index + 1)])
    const l2Reversed = l2.map((num, index, array) => array[array.length - (index + 1)])

    const sum = Number(l1Reversed.join('')) + Number(l2Reversed.join(''))
    
    return String(sum).split('').map((num, index, array) => array[array.length - (index + 1)])
}

const l1 = [2, 4, 3]
const l2 = [5, 6, 4]
console.log(addTwoNumbers(l1, l2))

const l3 = [0]
const l4 = [0]
console.log(addTwoNumbers(l3, l4))

const l5 = [9,9,9,9,9,9,9]
const l6 = [9,9,9,9]
console.log(addTwoNumbers(l5, l6))
