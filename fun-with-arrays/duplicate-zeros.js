// Given a fixed-length integer array arr, duplicate each occurrence of zero, shifting the remaining elements to the right.

// Note that elements beyond the length of the original array are not written. Do the above modifications to the input array in place and do not return anything.

 

// Example 1:

// Input: arr = [1,0,2,3,0,4,5,0]
// Output: [1,0,0,2,3,0,0,4]
// Explanation: After calling your function, the input array is modified to: [1,0,0,2,3,0,0,4]
// Example 2:

// Input: arr = [1,2,3]
// Output: [1,2,3]
// Explanation: After calling your function, the input array is modified to: [1,2,3]
 

// Constraints:

// 1 <= arr.length <= 104
// 0 <= arr[i] <= 9

/**
 * @param {number[]} arr
 * @return {void} Do not return anything, modify arr in-place instead.
 */
 const duplicateZeros = function(arr) {
    let validation = 0
    const arrLength = arr.length
    arr.forEach((num, index) => {
        if (validation % 2 !== 0) {
            validation++
            return
        }

        if (num === 0) {
            arr.splice(index + 1, 0, 0)
            validation++
        }
    })
    while (arr.length !== arrLength) arr.pop()

    return arr
}

// console.log('result==>', duplicateZeros([1,0,2,3,0,4,5,0]))
// console.log('result==>', duplicateZeros([1,2,3]))

module.exports = duplicateZeros