import {StudentType} from "../02-object/02";
import {addSkill} from "./03";

let student: StudentType

beforeEach(() => {
    student = {
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
            {id: 1, title: 'HTML'},
            {id: 2, title: 'CSS'},
            {id: 3, title: 'REACT'},
        ],
        'Мое имя': 'Тест',
        'My name': 'test 2',
        'Test 3': {
            'Name Key': {
                'Name Key 2': true,
                'Name Key 3': false
            }
        }
    }
})

test('function addSkill correct', () => {

    expect(student.tehnologies.length).toBe(3)

    addSkill(student, 'JS')

    expect(student.tehnologies.length).toBe(4)
    expect(student.tehnologies[3].id).toBeDefined()
    expect(student.tehnologies[3].title).toBe('JS')

})