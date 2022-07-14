// Given an integer n, return a string array answer (1-indexed) where:

// answer[i] == "FizzBuzz" if i is divisible by 3 and 5.
// answer[i] == "Fizz" if i is divisible by 3.
// answer[i] == "Buzz" if i is divisible by 5.
// answer[i] == i (as a string) if none of the above conditions are true.

// const fizzBuzz = function(n) {
//     if (typeof n == "number") {
//         if (n % 3 === 0) {
//             return "Fizz"
//         } else if (n % 5 === 0) {
//             return "Buzz"
//         } else {
//             return `${n}`
//         }
//     } else {
//     const answer = n.map((num) => {
//         if (num % 3 === 0 && num % 5 === 0) {
//             return "FizzBuzz"
//         } else if (num % 3 === 0) {
//             return "Fizz"
//         } else if (num % 5 === 0) {
//             return "Buzz"
//         } else {
//             return `${num}`
//         }
//     })
//     return answer
//     }
// }

// console.log(fizzBuzz())

const fizzBuzz = function(n) {
    const answer = []
    for (let i = 1; i <= n; i++) {
        if (i % 3 === 0 && i % 5 === 0) {
            answer.push("FizzBuzz")
        } else if (i % 3 === 0) {
            answer.push("Fizz")
        } else if (i % 5 === 0) {
            answer.push("Buzz")
        } else {
            answer.push(`${i}`)
        }
    }
    return answer
}

console.log(fizzBuzz(3))

// var fizzBuzz = function(n) {
//     let arr = []
//     for(let i=1; i<=n; i++){
//       (i%3==0 && i%5==0) ? arr.push('FizzBuzz') 
//     : ((i%3==0) ? arr.push('Fizz') 
//     : (i%5==0) ? arr.push('Buzz') 
//     : arr.push(i.toString()))
//     }
//     return arr
// };