function solution(str){
    const strArray = str.split('')
    if(strArray.length % 2 !== 0) strArray.push('_')  
    let arr = []
    for(let i = 0; i < str.length; i += 2) {
        arr.push(strArray.slice(i, i + 2).join(''))
    }
   
    return arr
}

const string = 'abcdef'
console.log('solution(string) ==>', solution(string))
