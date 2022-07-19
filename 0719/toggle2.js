function ToggleButton({
    $target,
    text
}) {
    const $button = document.createElement('button')
    let isInit = false

    this.render = () => {
        $button.textContent = text
        if(!isInit) {
            $target.appendChild($button)

            $button.addEventListener('click', () => {
                if($button.style.textDecoration === 'line-through'){
                    $button.style.textDecoration = ''
                }
                else{
                    $button.style.textDecoration = 'line-through'
                }
            })
        isInit = true
        }
    }
}

const $app = document.querySelector('#app')

const button1 = new ToggleButton({
    $target : $app,
    text: 'Button1'
})
button1.render()

new ToggleButton({
    $target: $app,
    text: 'Button2'
})

new ToggleButton({
    $target: $app,
    text: 'Button3'
})

new ToggleButton({
    $target: $app,
    text: 'Button4'
})