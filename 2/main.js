let students = [
    {
        name: "Bob",
        age: 22,
        isMarried: true,
        scores: 85,
        isStudent: false
    },
    {
        name: "Alex",
        age: 21,
        isMarried: true,
        scores: 89,
        isStudent: false
    },
    {
        name: "Nick",
        age: 20,
        isMarried: false,
        scores: 120,
        isStudent: false
    },
    {
        name: "John",
        age: 19,
        isMarried: false,
        scores: 100,
        isStudent: false
    }
];

const getStudentsNames = (arr) => {
    const result = []
    const func = (obj) => obj.name
    for (let i = 0; i < arr.length; i++) {
        result[i] = func(arr[i])
    }
    return result
}
console.log(getStudentsNames(students))
const getStudentsScores = (arr) => {
    const result = []
    for (let i = 0; i < arr.length; i++) {
        result[i] = arr[i].scores
    }
    return result
}
console.log(getStudentsScores(students))

const getStudents = (arr) => {
    const result = []
    for (let i = 0; i < arr.length; i++) {
        result[i] = {...arr[i], isStudent: true}
    }
    return result
}
console.log(getStudents(students))