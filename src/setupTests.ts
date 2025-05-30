//jest test cases
import '@testing-library/jest-dom';

const add=require('./signIn.txt')
test('first test',()=>{
    expect(add()).toBe(5)
})
