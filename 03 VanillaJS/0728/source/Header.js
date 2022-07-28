export default function Header({
    $target,
    initialState
}) {
    const $h2 = document.createElement('h2')
    $target.appendChild($h2)
        
    this.state =  initialState

    this.setState = nextState => {
        this.state = nextState 
        this.render()
    }

    this.render = () =>{
        const { username, isLoading } = this.state

        $h2.innerHTML = `${username} 님의 할일 목록 ${isLoading ? '로딩 중.. ': ''}`
    }

    this.render()
}