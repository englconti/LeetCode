var assert = require('assert')
const findNumbers = require('../fun-with-arrays/find-numbers-with-even-number-of-digits')
const findMaxConsecutiveOnes = require('../fun-with-arrays/max-consecutive-ones')
const sortedSquares = require('../fun-with-arrays/squares-of-a-sorted-array')

describe('[MODULE] fun-with-array-tests', () => {

  describe('[01]-find-numbers-with-even-number-of-digits', () => {
        
        it('[01-01] findNumbers should return 1 for [555,901,482,1771]', () => {
            assert.equal(findNumbers([555,901,482,1771]), 1)
        })
    })

    describe('[02]-max-consecutive-ones', () => {
        
        it('[02-01] findMaxConsecutiveOnes should return 2 for [1,0,1,1,0,1]', () => {
            assert.equal(findMaxConsecutiveOnes([1,0,1,1,0,1]), 2)
        })
    })

    describe('[03]-squares-of-a-sorted-array', () => {
        
        it('[03-01] sortedSquares should return [ 0, 1, 9, 16, 100 ] for [-4, -1, 0, 3, 10]', () => {
            const unsortedArray = [-4, -1, 0, 3, 10]
            const answer = [ 0, 1, 9, 16, 100 ]
            assert.deepEqual(sortedSquares(unsortedArray), answer)
        })
    })
})
