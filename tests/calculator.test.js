
const assert = require('assert')
const calc = require('./calculator')

describe('Testing basic functionallity of the calculator' , () => {
    it('add simple numbers [1 + 1]', () => {
        const actual = calc.add(1, 1)

        const expected = 2

        assert.strictEqual(expected, actual)
    })
})