function App({ $target, initialState}) {
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

            storage.setItem('todos', JSON.stringify(nextState))
        }
    })

    const todolist = new todoList({
        $target,
        initialState
    })
}