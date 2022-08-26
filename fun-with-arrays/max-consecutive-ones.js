// Given a binary array nums, return the maximum number of consecutive 1's in the array.
// Tests
// Input: nums = [1,0,1,1,0,1]
// Output: 2

/**
 * @param {number[]} nums
 * @return {number}
 */
 var findMaxConsecutiveOnes = function(nums) {
    let counter = 0
    let maxCounter = 0
    for (let i in nums) {
        if (nums[i] === 1) {
            counter++
            if (counter > maxCounter) maxCounter = counter
        } else counter = 0
    }
    return maxCounter
};

console.log('result =>', findMaxConsecutiveOnes([1,0,1,1,0,1]))

module.exports = findMaxConsecutiveOnes