import TodoForm from "./TodoForm.js"
import TodoList from "./TodoList.js"

const DUMMY_DATA = [
    {
        _id: 1,
        content: 'JavaScript 학습하기',
        isCompleted: true
    },
    {
        _id: 2,
        content: 'JavaScript 복습하기',
        isCompleted: false
    }
]

const $target = document.querySelector('#app')
new TodoForm({
    $target,
    onSubmit: (content) => {
        alert(`${content} 추가처리!`)
    }
})
new TodoList({
    $target,
    initailState: DUMMY_DATA,
    onToggle: (id) => {
        alert(`${id} 토글 예정`)
    },
    onRemove: (id) => {
        alert(`${id} 삭제 예정`)
    }
})