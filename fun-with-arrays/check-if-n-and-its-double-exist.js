// Given an array arr of integers, check if there exist two indices i and j such that :

// i != j
// 0 <= i, j < arr.length
// arr[i] == 2 * arr[j]
 

// Example 1:

// Input: arr = [10,2,5,3]
// Output: true
// Explanation: For i = 0 and j = 2, arr[i] == 10 == 2 * 5 == 2 * arr[j]
// Example 2:

// Input: arr = [3,1,7,11]
// Output: false
// Explanation: There is no i and j that satisfy the conditions.
 

// Constraints:

// 2 <= arr.length <= 500
// -103 <= arr[i] <= 103

/**
 * @param {number[]} arr
 * @return {boolean}
 */
 const checkIfExist = function(arr) {
    let check = false
    for(let i = 0; i < arr.length - 1; i++) {
        for(let j = i + 1; j < arr.length; j++) {
            if(i !== j && (arr[i] === 2 * arr[j] || arr[j] === arr[i] * 2)) check = true
        }
    }

    return check
}

module.exports = checkIfExist

// console.log('test 1 ===>', checkIfExist([10, 2, 5, 3]))
// console.log('test 2 ===>', checkIfExist([3, 1, 7, 11]))
// console.log('test 3 ===>', checkIfExist([7, 1, 14, 11]))