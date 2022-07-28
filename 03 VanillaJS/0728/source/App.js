import Header from "./Header.js"
import TodoForm from "./TodoForm.js"
import TodoList from "./TodoList.js"
import { request } from "./api.js"

export default function App({
    $target
}) {
    this.state = {
        username: 'roto',
        todos: [],
        isTodoLoading: false
    }

    new Header({
        $target,
        initialState: this.state.username
    })

    new TodoForm({
        $target,
        onSubmit: async (content) => {
            const todo = {
                content,
                isCompleted: false
            }
            await request(`/${this.state.username}`, {
                method: 'POST',
                body: JSON.stringify(todo)
            })
            await fetchTodos()
        }
    })

    this.setState = nextState => {
        this.state = nextState

        todoList.setState({
            isTodoLoading: this.state.isTodoLoading,
            todos: this.state.todos
        })
    }

    const todoList = new TodoList({
        $target,
        initialState: {
            isTodoLoading: this.state.isTodoLoading,
            todos: this.state.todos,
        },
        onToggle: async (id) => {
            await request(`/${this.state.username}/${id}/toggle`, {
                method: 'PUT'
            })
            await fetchTodos()
        },
        onRemove: (id) => {
            alert(`${id} 삭제 예정`)
        }
    })

    const fetchTodos = async () => {
        const { username } = this.state

        if(username) {
            this.setState({
                ...this.state,
                isTodoLoading: true
            })
            const todos = await request(`/${username}`)
            this.setState({
                ...this.state,
                todos,
                isTodoLoading: false
            })
        }
    }
    
    fetchTodos()
}