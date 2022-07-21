import Header from './Header.js'
import todoFrom from './todoForm.js'
import todoList from './todoList.js'
import { setItem } from './storage.js'

export default function App({ $target, initialState}) {
    new Header({ 
        $target, text: 'Simple Todo List'
    })
    
    new todoFrom({
        $target,
        onSubmit: (text) => {
            const nextState = [...todolist.state, {
                text
            }]
            todolist.setState(nextState)

            setItem('todos', JSON.stringify(nextState))
        }
    })

    const todolist = new todoList({
        $target,
        initialState
    })
}