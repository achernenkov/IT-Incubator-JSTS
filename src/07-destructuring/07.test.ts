import ts from "typescript/lib/tsserverlibrary";

test ('1', () => {

    let man = {
        name: 'Andrey',
        age: 23,
        lessons: [
            {title: '1'},
            {title: '2'}
        ],
        city:{
            street:'Surganova'
            }
    }

    let {name, age} = man

    expect(age).toBe(man.age)
    expect(name).toBe(man.name)

    let {name:n, age: a} = man

    expect(a).toBe(man.age)
    expect(n).toBe(man.name)


} )

test ('2', () => {

    let man = {
        name: 'Andrey',
        age: 23,
        lessons: [
            {title: '1'},
            {title: '2'},
            {title: '3'}
        ],
        city:{
            street:'Surganova'
        }
    }

    let [title1, title2] = man.lessons

    expect(title1.title).toBe('1')
    expect(title2.title).toBe('2')

    let [, l2] = man.lessons
    let [, , l3] = man.lessons

    expect(l2.title).toBe('2')
    expect(l3.title).toBe('3')

    let [, el2, ...restLessons] = man.lessons


    expect(el2.title).toBe('2')
    expect(restLessons.length).toBe(1)
    expect(restLessons[0].title).toBe('3')
} )



export default 1