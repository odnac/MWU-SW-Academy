// ToggleButton 외에 5초 뒤에 자동 토글 되는 버튼 만들기
function TimerButton({$target, text, timer=3000}) {
    const button = new ToggleButton({ $target, text, onClick: () => {
        setTimeout(() => {
            button.setState({
                ...button.state,
                toggled: ! button.state.toggled
            })
        }, timer)
    }})
}
function ToggleButton({$target, text, onClick}) {
    const $button = document.createElement('button')
    $target.appendChild($button)

    this.state = {
        clickCount: 0,
        toggled: false
    }

    this.setState = (nextState) => {
        this.state = nextState
        this.render()
    }

    this.render = () => {
        $button.textContent = text

        $button.style.textDecoration 
        = this.state.toggled ? 'line-through' : 'none'
    }

    $button.addEventListener('click', () =>{
        this.setState({
            clickCount: this.state.clickCount + 1,
            toggled: !this.state.toggled
        })

        if(onClick){
            onClick(this.state.clickCount)
        }
    })

    this.render()
}

const $app = document.querySelector('#app')

new ToggleButton({
    $target: $app,
    text: '버튼1',

})
new ToggleButton({
    $target: $app,
    text: '버튼2',
})
new ToggleButton({
    $target: $app,
    text: '버튼3',
})
new ToggleButton({
    $target: $app,
    text: '버튼4',
})

new TimerButton({
    $target: $app,
    text: '3초 뒤에 자동으로!'
})

new TimerButton({
    $target: $app,
    text: '10초 뒤에 자동으로!',
    timer: 1000 * 10
})