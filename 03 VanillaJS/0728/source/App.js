import Header from "./Header.js"
import UserList from "./UserList.js"
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

    const userList = new UserList({
        $target,
        initialState: ['roto', 'kth', 'programmers']
    })

    const header = new Header({
        $target,
        initialState: {
            isLoading: this.state.isTodoLoading,
            username: this.state.username
        }
    })

    new TodoForm({
        $target,
        onSubmit: async (content) => {
            const todo = {
                content,
                isCompleted: false
            }
            this.setState({
                ...this.state,
                todos: [
                    ...this.state.todos,
                    todo
                ]
            })
            await request(`/${this.state.username}`, {
                method: 'POST',
                body: JSON.stringify(todo)
            })
            await fetchTodos()
        }
    })

    this.setState = nextState => {
        this.state = nextState

        header.setState({
            isLoading: this.state.isTodoLoading,
            username: this.state.username
        })

        todoList.setState({
            isLoading: this.state.isTodoLoading,
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
            const todoIndex = this.state.todos.findIndex(todo => todo._id === id)

            const nextTodos = [...this.state.todos]
            nextTodos[todoIndex].isCompleted = !nextTodos[todoIndex].isCompleted
            this.setState({
                ...this.state,
                todos: nextTodos
            })
            await request(`/${this.state.username}/${id}/toggle`, {
                method: 'PUT'
            })
            await fetchTodos()
        },
        onRemove: async (id) => {
            const todoIndex = this.state.todos.findIndex(todo => todo._id === id)

            const nextTodos = [...this.state.todos]
            nextTodos.splice(todoIndex, 1)
            this.setState({
                ...this.state,
                todos: nextTodos
            })
            await request(`/${this.state.username}/${id}`, {
                method: 'DELETE'
            })
            await fetchTodos()
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