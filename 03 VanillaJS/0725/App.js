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
            try {
                // 로딩 중 보여주기 처리
                const data = await request('https://kdt.roto.codes/comments?todo.id=${id}')
                this.setState({
                    ...this.state,
                    comments
                })
            } catch(e) {
                // promise의 .catch와 비슷한 역할
            } finally {
                // promise의 .finally와 비슷한 역할
                // 로딩 중 숨겨주는 처리
            }
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