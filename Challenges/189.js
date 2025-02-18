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
    // const numsMap = new Map()
    // nums.forEach((num, i) => {
    //     numsMap.set(i, num) // position and num

    // })

    const numsMapToGo = new Map()
    let pos
    nums.forEach((num, i) => {
        pos = i + k < nums.length ? i + k : i + k - nums.length 
        numsMapToGo.set(pos, num)
    })
    const newNums = []
    for (const [ind, value] of numsMapToGo) {
        newNums[ind] = value
    }
    return newNums

    // let position
    // for (const [index, value] of numsMap) {
    //     position = (index + k) > (nums.length - 1) ? (index + k) - (nums.length) : (index + k)
    //     nums[position] = value
    // }

    // return nums
}

console.log(rotate([1,2,3,4,5,6,7], 3)) // [5,6,7,1,2,3,4]
console.log(rotate([1,2], 3)) // [2,1]


// nums =
// [1,2]
// k =
// 3

// Use Testcase
// Output
// [1,1,2]
// Expected
// [2,1]