import { request } from "./api.js";
import TodoList from "./TodoList.js";

export default function App({ $target }) {
    this.state = {
        todos: []
    }

    const incompletedTodoList = new TodoList({
        $target,
        initialState: {
            title: '완료되지 않은 일들',
            todos: []
        },

        onDrop: async (todoId) => {
            console.log(`완료처리된 todo에서 ${todoId}가 넘어옴!`)

            const nextTodos = [...this.state.todos]
            const todoIndex = nextTodos.findIndex(todo => todo._id === todoId)

            nextTodos[todoIndex].isCompleted = false
            this.setState({
                ...this.state,
                todos: nextTodos
            })

            await request(`/${todoId}/toggle`, {
                method: 'PUT'
            })

            await fetchTodos()
        }
    });

    const completedTodoList = new TodoList({
        $target,
        initialState: {
            title: '완료된 일들',
            todos: []
        },

        onDrop: async (todoId) => {
            console.log(`미완료처리된 todo에서 ${todoId}가 넘어옴!`)

            const nextTodos = [...this.state.todos]
            const todoIndex = nextTodos.findIndex(todo => todo._id === todoId)
            
            nextTodos[todoIndex].isCompleted = true
            this.setState({
                ...this.state,
                todos: nextTodos
            })

            await request(`/${todoId}/toggle`, {
                method: 'PUT'
            })

            await fetchTodos()
        }
    })

    this.setState = nextState => {
        this.state = nextState

        const { todos } = this.state

        incompletedTodoList.setState({
            ...incompletedTodoList.state,
            todos:todos.filter(todo => !todo.isCompleted)
        })

        completedTodoList.setState({
            ...completedTodoList.state,
            todos:todos.filter(todo => todo.isCompleted)
        })
    }

    const fetchTodos = async () => {
        const todos = await request('')

        this.setState({
            ...this.setState,
            todos
        })
    }

    fetchTodos()
}
