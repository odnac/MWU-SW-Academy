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
            await request(`/${this.state.username}?delay=3000`, {
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
            await request(`/${this.state.username}/${id}/toggle`, {
                method: 'PUT'
            })
            await fetchTodos()
        },
        onRemove: async (id) => {
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
            const todos = await request(`/${username}?delay=5000 `)
            this.setState({
                ...this.state,
                todos,
                isTodoLoading: false
            })
        }
    }
    
    fetchTodos()
}