
const assert = require('assert')
const dal = require('./dal')

describe('Testing functionallity of the DAL' , async () => {
    it('get_all', async () => {
        await dal.delete_all()
        await dal.new_employee({ 'NAME': 'Paul', 'AGE': 32, 'ADDRESS': 'California', 'SALARY': 20000.00})  // Id: 1
        await dal.new_employee({ 'NAME': 'Allen', 'AGE': 32, 'ADDRESS': 'California', 'SALARY': 20000.00}) // Id: 2
        await dal.new_employee({ 'NAME': 'Teddy', 'AGE': 32, 'ADDRESS': 'California', 'SALARY': 20000.00}) // Id: 3
        const expected = 3
        const employees = await dal.get_all()
        const actual = employees.length
        console.log(actual);
        assert.strictEqual(expected, actual)
    })

    // complete all other tests for all methods:
    // get_all
    // get_by_id(id)
    // new_employee(new_emp)
    // update_emplyee(id, updated_employee)
    // delete_employee(id)
    // delete_all ?

})