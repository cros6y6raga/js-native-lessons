const todoListId_1 = 'qw34-jg65'  //v1()
const todoListId_2 = 'qa31-jg15'  //v1()
const todoLists = [
    {
        id: todoListId_1,
        title: 'What to learn',
        filter: 'all',
    },
    {
        id: todoListId_2,
        title: 'What to buy',
        filter: 'all',
    },
]

const tasks = {
    [todoListId_1]: [ //'qw34-jg65'
        {name: 'httt', isDone: true},
        {name: 'Css', isDone: false},
    ],
    [todoListId_2]: [ //'qa31-jg15'
        {name: 'aaaa', isDone: true},
        {name: 'Cwwwss', isDone: false},
    ]
}

console.log(tasks[todoLists[0].id])