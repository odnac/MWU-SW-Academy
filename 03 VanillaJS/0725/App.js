import todoList from './todoList.js'
import todoComments from './todoComments.js'
import { request } from './api.js'

export default function App({ $app }) {
    this.state = {
        todos: [],
        selectedTodo: null,
        comments: []
    }

    this.setState = nextState => {
        this.state = nextState
        todolist.setState(this.state.todos)
        todocomments.setState({
            selectedTodo: this.state.selectedTodo,
            comments: this.state.comments
        })
    }

    const todolist = new todoList({
        $target: $app,
        initialState: this.todos,
        onClick: async (id) => {
            const selectedTodo = this.state.todos.find(todo => todo.id === id)
            this.setState({
                ...this.state,
                selectedTodo
            })
            
            // 댓글 목록 불러오기
            const data = await request('https://kdt.roto.codes/comments?todo.id=${id}')
            this.setState({
                 ...this.state,
                 comments
            })
        }
    })
    
    const todocomments = new todoComments({
        $target: $app,
        initialState: {
            selectedTodo: this.state.selectedTodo,
            comments: this.state.comments 
        }
    })

    //todos 불러오기
    this.init = async () => {
        const data = await request('https://kdt.roto.codes/todos') 
            this.setState({
                ...this.state,
                todos: data
            })
    }

    this.init()
}