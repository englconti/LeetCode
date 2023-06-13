// Given an integer array nums, move all 0's to the end of it while maintaining the relative order of the non-zero elements.

// Note that you must do this in-place without making a copy of the array.

 

// Example 1:

// Input: nums = [0,1,0,3,12]
// Output: [1,3,12,0,0]
// Example 2:

// Input: nums = [0]
// Output: [0]
 

// Constraints:

// 1 <= nums.length <= 104
// -231 <= nums[i] <= 231 - 1
 

// Follow up: Could you minimize the total number of operations done?

/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
 const moveZeroes = function(nums) {
    let counter
    for(let i = 0; i < nums.length; i++) {
        if (nums[i] === 0) {
            counter = i + 1
            while (nums[counter] === 0 && counter < nums.length) counter++
            for(let j = counter; j < nums.length; j++) nums[j - 1] = nums[j]
            nums[nums.length - 1] = 0
        }
    }

    if(nums[0] === 0) {
        for(let x = 1; x <= nums.length; x++) nums[x - 1] = nums[x]
    
        nums[nums.length - 1] = 0
    }
    
    return nums
}

console.log('test 1 ===>', moveZeroes([0, 1, 0, 3, 12]))
console.log('test 2 ===>', moveZeroes([0, 0, 1]))
console.log('test 3 ===>', moveZeroes([1, 0, 1, 0]))

