export default function Editor({ $target, initialState = {
    title: '',
    content: ''
} }) {
    const $editor = document.createElement('div')

    this.state = initialState

    $target.appendChild($editor)

    this.setState = (nextState) => {
        this.state = nextState
        this.render()
    }

    this.render = () => {
        $editor.innerHTML = `
            <input type="text" name="title" style="width:600px;" value="${this.state.title}"/>
            <textarea name="content" style="width:600px;height:400px;">${this.state.content}</textarea>
        `
    }
    
    this.render()

    $editor.addEventListener('keyup', e => {
        
        this.state = {
            ...this.state
        }
    })
}