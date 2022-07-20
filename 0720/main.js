const data = [
    {
        text: 'JavaScript 공부하기'
    },
    {
        text: 'JavaScript 복습하기'
    }
]

const data1 = [
    {
        text: '운동장 뛰기'
    },
    {   
        text: '푸쉬업 하기'
    },
    {
        text: '턱걸이 하기'
    }
]

const $app = document.querySelector('.app')

new todoList2({
    $target: $app,
    initialState: data
})

new todoList2({
    $target: $app,
    initialState: data1
})