const sm = document.getElementById('small')

const handler1 = () => {
    alert('Click')
}
const handler2 = () => {
    alert('Yo')
}

// sm.onclick = handler1
// sm.onclick = handler2
// sm.onclick = () => {
//     handler1()
//     handler2()
// }
// sm.onclick = handler2  //удаляем первый обработчик

sm.addEventListener('click', handler1) // #345
sm.addEventListener('click', handler2)
sm.removeEventListener('click', handler1) // #666

// onClick -> React