import {del, mult, SplitIntoWords, sum} from "./01";

let a:number
let b:number
let c:number

beforeEach(()=>{
    a = 1
    b = 2
    c = 3
})

test('sum should be correct', () => {


    //action
    let result1 = sum(a,b)
    b = 100
    let result2 = sum(b,c)

    //expect result
    expect(result1).toBe(3)
    expect(result2).toBe(103)

})

test('Myltiply should to be correct', () => {


    //action
    let result1 = mult(a,b)
    let result2 = mult(b,b)

    expect(result1).toBe(2)
    expect(result2).toBe(4)

})

test('Split in to words should to be correct', () => {

    //data
    const arr:Array<string> = ['hello', 'my', 'friend']

    //action
    let result = SplitIntoWords(arr)

    //exspect
    expect(result[0]).toBe('hello')
    expect(result[1]).toBe('my')
    expect(result[2]).toBe('friend')
    expect(result.length).toBe(arr.length)
})

test('Del should to be correct', () => {
    const result = del(c,a)
    expect(result).toBe(3)
})