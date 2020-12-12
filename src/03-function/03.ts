import {StudentType} from "../02-object/02";

const sum = (a: number, b:number) => {
    return a + b
}

const res = sum(sum(1,2),sum(4,5))


const student: StudentType = {
    id: 1,
    "name": 'Andrey',
    age: 23,
    isActive: true,
    address: {
        streetTitle: 'Surganova',
        city: {
            title: 'Minsk',
            country: 'Belarus'
        }
    },
    tehnologies: [
        {id:1, title: 'HTML'},
        {id:2, title: 'CSS'},
        {id:3, title: 'REACT'},
    ],
    'Мое имя': 'Тест',
    'My name': 'test 2',
    'Test 3':{
        'Name Key':{
            'Name Key 2': true,
            'Name Key 3': false
        }
    }
}

export const addSkill = (student:StudentType, skill:string) => {
    student.tehnologies.push({
        id:4, title:skill
    })
}


// Через function - function declaration.
// Стрелочная - function expression.

export default sum;