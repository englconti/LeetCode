const maximumWealth = (accounts) => {
    let maxWealth = accounts[0].reduce((acc, num) => { return acc + num }, 0)
    for (let i in accounts) {
        maxWealth = accounts[i].reduce((acc, num) => { return acc + num }, 0) > maxWealth ? accounts[i].reduce((acc, num) => { return acc + num }, 0) : maxWealth
    }
    return maxWealth
}
