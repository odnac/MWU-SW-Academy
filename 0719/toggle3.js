// 3번 클릭할 때마다 alert 띄우기
function ToggleButton({$target, text, onClick}) {
    const $button = document.createElement('button')
    $target.appendChild($button)
    let clickCount = 0;

    this.render = () => {
        $button.textContent = text
    }

    $button.addEventListener('click', () =>{
        clickCount++
        if($button.style.textDecoration === 'line-through'){
            $button.style.textDecoration = 'none'
        }else {
            $button.style.textDecoration = 'line-through'
        }
        if(onClick){
            onClick(clickCount)
        }
    })

    this.render()
}

const $app = document.querySelector('#app')

new ToggleButton({
    $target: $app,
    text: '버튼1',
    onClick: (clickCount) => {
        if(clickCount % 3 === 0){
            alert('3번째 클릭!')
        }
    }
})
new ToggleButton({
    $target: $app,
    text: '버튼2',
    onClick: (clickCount) => {
        if(clickCount % 2 === 0){
            alert('두번째 클릭')
        }
    }
})
new ToggleButton({
    $target: $app,
    text: '버튼3',
})
new ToggleButton({
    $target: $app,
    text: '버튼4',
})