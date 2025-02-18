// 189. Rotate Array
// Medium
// Topics
// Companies
// Hint
// Given an integer array nums, rotate the array to the right by k steps, where k is non-negative.

// Example 1:

// Input: nums = [1,2,3,4,5,6,7], k = 3
// Output: [5,6,7,1,2,3,4]
// Explanation:
// rotate 1 steps to the right: [7,1,2,3,4,5,6]
// rotate 2 steps to the right: [6,7,1,2,3,4,5]
// rotate 3 steps to the right: [5,6,7,1,2,3,4]
// Example 2:

// Input: nums = [-1,-100,3,99], k = 2
// Output: [3,99,-1,-100]
// Explanation: 
// rotate 1 steps to the right: [99,-1,-100,3]
// rotate 2 steps to the right: [3,99,-1,-100]

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var rotate = function(nums, k) {
    if (nums.length <= 1) return nums 

    console.log('remainer', k % nums.length)
    const remainer = k % nums.length

    const numsMapToGo = new Map()
    let position
    nums.forEach((num, i) => {
            position = i + remainer < nums.length ? i + remainer : i + remainer - nums.length
            numsMapToGo.set(position, num)
    })

    for (const [ind, value] of numsMapToGo) {
        nums[ind] = value
    }

    return nums
}

console.log(rotate([1,2,3,4,5,6,7], 3)) // [5,6,7,1,2,3,4]
console.log(rotate([1,2], 3)) // [2,1]
console.log(rotate([1,2,6], 3)) // [2,1]