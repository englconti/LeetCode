function solution(number){
  if (number <= 0) return 0

  let sum = 0
  for(let i = 0; i < number; i++) {
    if(i % 3 === 0 || i % 5 === 0) {
        sum += i
    }
  }

  return sum
}

console.log('solution(0) ===>', solution(0))
console.log('solution(10) ===>', solution(10))
