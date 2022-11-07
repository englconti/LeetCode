// Given an array of integers arr, return true if and only if it is a valid mountain array.

// Recall that arr is a mountain array if and only if:

// arr.length >= 3
// There exists some i with 0 < i < arr.length - 1 such that:
// arr[0] < arr[1] < ... < arr[i - 1] < arr[i]
// arr[i] > arr[i + 1] > ... > arr[arr.length - 1]

 

// Example 1:

// Input: arr = [2,1]
// Output: false
// Example 2:

// Input: arr = [3,5,5]
// Output: false
// Example 3:

// Input: arr = [0,3,2,1]
// Output: true
 

// Constraints:

// 1 <= arr.length <= 104
// 0 <= arr[i] <= 104

/**
 * @param {number[]} arr
 * @return {boolean}
 */
 const validMountainArray = function(arr) {
    if (arr.length < 3 || arr[1] <= arr[0]) return false
    
    let response = true
    let climbing = true
    for(let i = 1; i < arr.length; i++) {
        if (climbing) climbing = arr[i] > arr[i - 1]
        
        if (!climbing) {
            climbing = arr[i] >= arr[i - 1]
            if (climbing) response = false
        }
    }

    return arr[arr.length - 1] >= arr[arr.length - 2] ? false : response
}

console.log('test 1 ===>', validMountainArray([2, 1]))
console.log('test 2 ===>', validMountainArray([3, 5, 5]))
console.log('test 3 ===>', validMountainArray([0, 3, 2, 1]))
console.log('test 4 ===>', validMountainArray([0,1,2,3,4,5,6,7,8,9]))