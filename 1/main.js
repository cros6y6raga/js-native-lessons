// К ссылочным типам данных относятся массивы объекты и функции
let num1 = 5
let num2 = num1
num2 = 7
console.log(num1, num2)

let user1 = {  //#123
    name: 'Bob',
    age: 23
}

let user2 = user1 // #123
user2.name = 'Alex'
user2.isStudent = true
console.log(user1.name, user2)

console.log(Number.isNaN(NaN))
console.log(typeof (() => {
}))
console.log(Array.isArray([]))
console.log(Array.isArray({}))
console.log(typeof Infinity)
console.log(Number.isFinite(Infinity))
console.log(Number.isFinite(123))

// объект => создаем копию => вносим изменения в копию => используем копию

const copyUser = {...user1}
// copyUser.name = user1.name
// copyUser.age = user1.age
console.log(copyUser === user1)
const array = [1, 2, 3, 4, 5] // => 6
// array.push(6) => мутабельно!
const copy = [...array]
copy.push(6)
console.log([...array, 6])