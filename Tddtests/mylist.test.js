
const assert = require('assert')
const mylist = require('./mylist')

describe('Testing functionallity of the list' , () => {
    it('insert into the list', () => {
        mylist.initialize()
        mylist.insert(10)
        const expected = 1
        const actual = mylist.count()
        assert.strictEqual(expected, actual)
    })
    it('remove from the list', () => {
        mylist.initialize()
        mylist.insert(1)
        mylist.remove()
        const expected = 0
        const actual = mylist.count()
        assert.strictEqual(expected, actual)
    })    
    it('find max in a list', () => {
        mylist.initialize()
        mylist.insert(-2)
        mylist.insert(10)        
        mylist.insert(-5)
        mylist.insert(-40)
        const expected = 10
        const actual = mylist.max()
        assert.strictEqual(expected, actual)
    })      
    it('find min in a list', () => {
        mylist.initialize()
        mylist.insert(10)
        mylist.insert(-40)        
        mylist.insert(-2)
        mylist.insert(-5)
        const expected = -40
        const actual = mylist.min()
        assert.strictEqual(expected, actual)
    })          
 
    it('find avg in a list', () => {
        mylist.initialize()
        mylist.insert(10)
        mylist.insert(-40)        
        mylist.insert(-2)
        mylist.insert(-5)
        const expected = -9.25
        const actual = mylist.avg()
        assert.strictEqual(expected, actual)
    }) 

    it('find count in a list', () => {
        mylist.initialize()
        mylist.insert(10)
        mylist.insert(-40)        
        mylist.insert(-2)
        mylist.insert(-5)
        const expected = 4
        const actual = mylist.count()
        assert.strictEqual(expected, actual)
    })     
    it('remove an item from an empty list should create an error', () => {
        assert.throws(() => {
            mylist.initialize()
            mylist.insert(1)
            mylist.remove()
            mylist.remove()
        })
    }) 

})