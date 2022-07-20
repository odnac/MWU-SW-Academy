function App({ $target, initialState}) {
    new Header({ 
        $target, text: 'Simple Todo List'
    })
    
    new todoFrom({
        $target,
        onSubmit: (text) => {
            const nextState = [...todolist2.state, {
                text
            }]
            todolist2.setState(nextState)
        }
    })

    const todolist2 = new todoList2({
        $target,
        initialState
    })
}