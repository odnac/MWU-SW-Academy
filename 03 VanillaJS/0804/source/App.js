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
        }
    });

    const completedTodoList = new TodoList({
        $target,
        initialState: {
            title: '완료된 일들',
            todos: []
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
