const numberOfSteps = function(num) {
    if (num === 0 || num === 1) return num
    let counter = 0;
    while (num !== 0) {
        counter++
        if (num % 2 === 0) {
            num = num / 2
        } else {
            num--
        } 
    }
    return counter
}

console.log(numberOfSteps(14))
console.log(numberOfSteps(0))
console.log(numberOfSteps(1))
console.log(numberOfSteps(2))


// Input: num = 14
// Output: 6
// Explanation: 
// Step 1) 14 is even; divide by 2 and obtain 7. 
// Step 2) 7 is odd; subtract 1 and obtain 6.
// Step 3) 6 is even; divide by 2 and obtain 3. 
// Step 4) 3 is odd; subtract 1 and obtain 2. 
// Step 5) 2 is even; divide by 2 and obtain 1. 
// Step 6) 1 is odd; subtract 1 and obtain 0.