// Native Lesson 7 test

import {copyGroupStudent, copyStudent, fullCopyStudent, StudentsGroupType, StudentType} from "./JS7";

test('Copy student correct', () => {

    const obj:StudentType = {
        name: 'Vasyl',
        age: 24,
        isMarried: true,
        scores:100,
        friends: ['Kosta', 'Andrey', 'Katya', 'Victor', 'Masha']
    }

    let result = copyStudent(obj)

    expect(result.name).toBe(obj.name)
    expect(result !== obj).toBe(true)
    expect(result.friends === obj.friends).toBe(true)

})

test('FullCopy student correct', () => {

    const obj:StudentType = {
        name: 'Vasyl',
        age: 24,
        isMarried: true,
        scores:100,
        friends: ['Kosta', 'Andrey', 'Katya', 'Victor', 'Masha']
    }

    let result = fullCopyStudent(obj)

    expect(result.name).toBe(obj.name)
    expect(result !== obj).toBe(true)
    expect(result.friends === obj.friends).toBe(false)

})

test('FullCopyGrop student correct', () => {

    const arr:StudentsGroupType = [
        {
        name: 'Vasyl',
        age: 24,
        isMarried: true,
        scores:100,
        friends: ['Kosta', 'Andrey', 'Katya', 'Victor', 'Masha']
        },
        {
            name: 'Oksana',
            age: 24,
            isMarried: true,
            scores:100,
            friends: ['Kosta', 'Andrey', 'Katya', 'Victor', 'Yana', 'Masha']
        },
        {
            name: 'Yana',
            age: 24,
            isMarried: true,
            scores:100,
            friends: ['Kosta', 'Andrey', 'Katya', 'Victor', 'Masha', 'Vasyl']
        }
    ]

    let result:StudentsGroupType = copyGroupStudent(arr)

    expect(arr !== result).toBe(true)
    expect(result[0].friends !== arr[0].friends).toBe(true)
    expect(result[1].friends !== arr[1].friends).toBe(true)
    expect(result[2].friends !== arr[2].friends).toBe(true)

})