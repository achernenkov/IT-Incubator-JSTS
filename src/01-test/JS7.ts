// Native Lesson 7

export type StudentType = {
    name: string
    age: number
    isMarried: boolean
    scores: number
    friends: Array<string>
}

export type StudentsGroupType = Array<StudentType>

export function copyStudent(st:StudentType):StudentType{
    return {...st}
}

export function fullCopyStudent(st:StudentType):StudentType{
    return {...st, friends:[...st.friends]}
}

export function copyGroupStudent(group:StudentsGroupType):StudentsGroupType {
    let a = group.map( el => ({...el, friends:[...el.friends]}))
    return a
}

// export default
const a = 0
export default a;