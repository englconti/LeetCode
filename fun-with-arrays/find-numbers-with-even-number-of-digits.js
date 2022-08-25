// Given an array nums of integers, return how many of them contain an even number of digits.

// Input: nums = [555,901,482,1771]
// Output: 1 
// Explanation: 
// Only 1771 contains an even number of digits.

/**
 * @param {number[]} nums
 * @return {number}
 */
 const findNumbers = function(nums) {
        let counter = 0
        for (let num of nums) {            
            if (`${num}`.length % 2 === 0) counter++
        }
        return counter
}

console.log('return ==>', findNumbers([555,901,482,1771]))
