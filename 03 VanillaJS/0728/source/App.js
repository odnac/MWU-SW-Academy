import Header from "./Header.js"
import TodoForm from "./TodoForm.js"
import TodoList from "./TodoList.js"
import { request } from "./api.js"

export default function App({
    $target
}) {
    this.state = {
        username: 'roto',
        todos: []
    }

    new Header({
        $target,
        initialState: this.state.username
    })

    new TodoForm({
        $target,
        onSubmit: (content) => {
            alert(`${content} 추가처리!`)
        }
    })

    const todoList = new TodoList({
        $target,
        initialState: this.state.todos,
        onToggle: (id) => {
            alert(`${id} 토글 예정`)
        },
        onRemove: (id) => {
            alert(`${id} 삭제 예정`)
        }
    })

    const init = async () => {
        const { username } = this.state

        if(username) {
            const todos = await request(`/${username}`)
            console.log(todos)
        }
    }
    
    init()
}