const runningSum = function(nums) {
    let counter = 0
    const newArray = nums.map((num) => {
        if (counter === 0) {
            counter++
            return num
        } else {
            let sum = 0
            for (let i = 0; i <= counter; i++) {
                sum += nums[i]
            }
            counter++
            return sum
        }
    })
    return newArray
};

console.log(runningSum([1,2,3,4]))