export default function TodoList({ $target, initialState }) {
    const $todoList = document.createElement('div')
    $todoList.setAttribute('droppable','true')
    $target.appendChild($todoList)
    
    this.state = initialState

    this.setState = nextState => {
        this.state = nextState
        this.render()
    }

    this.render = () => {
        const { title, todos = []} = this.state
        $todoList.innerHTML = `
            <h2>${title}</h2>
            <ul>
                ${todos.map(todo => `<li draggable="true">${todo.content}</li>`).join('')}
            </ul>
            ${todos.length === 0 ? '설정된 일이 없습니다.' : ''}
        `
    }

    this.render()

    $todoList.addEventListener('drag', e => {
        e.dataTransfer
        console.log(e)
    })
}