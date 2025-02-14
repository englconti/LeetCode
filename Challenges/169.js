// Given an array nums of size n, return the majority element.

// The majority element is the element that appears more than ⌊n / 2⌋ times. You may assume that the majority element always exists in the array.

 

// Example 1:

// Input: nums = [3,2,3]
// Output: 3
// Example 2:

// Input: nums = [2,2,1,1,1,2,2]
// Output: 2

/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function(nums) {
    const numMap = new Map()
    nums.forEach((num) => {
        if (numMap.has(num)) {
            numMap.set(num, numMap.get(num) + 1)
        } else {
            numMap.set(num, 1)
        }
    })

    let majorNum
    let counter = 0
    for (const [num, amount] of numMap) {
        if (amount > counter) {
            counter = amount
            majorNum = num
        }
    }

    return majorNum
}

console.log(majorityElement([2,2,1,1,1,2,2]))