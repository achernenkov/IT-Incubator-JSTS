// Создание с помощью {} - создание с помощью синтаксиса литерала объекта.
// Ключ - это строка, но удобства не береться в скобки.

// Даемный явный тип объекту, вместо неявного.
export type StudentType = {
    id: number
    name: string
    age: number
    isActive: boolean
    address: AddressType
    tehnologies: Array<TehnologiesType>
    'Мое имя': string
    'My name': string
    'Test 3': Test3Type
}

type AddressType = {
    streetTitle: string
    city: AddressCityType
}

type AddressCityType = {
    title: string
    country: string
}

type TehnologiesType = {
    id: number
    title: string
}

type Test3Type = {
    'Name Key': NameKeyType
}

type NameKeyType = {
    'Name Key 2': boolean
    'Name Key 3': boolean
}

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

// Как обращаться к "неправильным" свойствам.
console.log(student["Мое имя"])
console.log(student["My name"])

console.log(student['Test 3']["Name Key"]["Name Key 2"])

console.log(student.tehnologies[2].title) // React получили.


export type CityType = {
    title: string
    houses: Array<HousesType>
    governmentBuildings: Array<GovernmentBuildingsType>
    citizensNumber: number
}

type HousesType = {
    buildedAt: number
    repaired: boolean
    address:AddressBLType
    street: StreetBLType
}

type AddressBLType = {
    number: number
}

type StreetBLType = {
    title:string
}

type GovernmentBuildingsType = {
    type: string
    budget: number
    staffCount: number
    address: GovernmentBuildingsAddressType
}

type GovernmentBuildingsAddressType = {
    street: StreetBLType
}


export default student;