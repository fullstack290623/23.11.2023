
const assert = require('assert')
const calc = require('./calculator')

describe('Testing basic functionallity of the calculator' , () => {
    it('add simple numbers [1 + 1]', () => {
        const actual = calc.add(1, 1)

        const expected = 2

        assert.strictEqual(expected, actual)
    })

    it('minus simple numbers [9 - 4]', () => {
        const actual = calc.sub(9, 4)

        const expected = 5

        assert.strictEqual(expected, actual)
    })

    it('mul simple numbers [7 * 2.5]', () => {
        const actual = calc.mul(7, 2.5)

        const expected = 17.5

        assert.strictEqual(expected, actual)
    })
    
    it('div simple numbers [9 / 4]', () => {
        const actual = calc.div(9, 4)

        const expected = 2.25

        assert.strictEqual(expected, actual)
    })
    
    it('div by zero [1 / 0]', () => {
        // this should create an Error
        // if there will be an error -> the test will pass
        // if there will be NO error -> the test will fail
        assert.throws(() => {
            const actual = calc.div(1, 0)
        })
    })    


    // add test for add with zerto
    // add test for sub
    // add test for mul
    // add test for div 
    // add test for div by zero
})