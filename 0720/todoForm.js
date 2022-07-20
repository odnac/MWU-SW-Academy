function todoFrom({ $target, onSubmit }){
    const $from = document.createElement('form') // 폼 생성. todoForm을 new할 때 document element로 폼을 만들고

    $target.appendChild($from) // target에 appendchild로 추가함

    let isInit = false

    this.render = () => { // 실제로 그리는 부분. input과 button을 그림
        $from.innerHTML = `
            <input type="text" name="todo" />
            <button>Add</button>
        `

        //isInit에 따라서 submit이벤트를 처리하는 부분
        if(!isInit) { // render() 많이 돌아갈 수 있으므로 안전하게 플래그변수를 사용하여 false인 경우에만 실행되게 하도록 함
            $from.addEventListener('submit', e => {
                e.preventDefault() // 태그의 기본 동작을 끔. 폼 내에 입력 시 새로고침 되는 걸 막아줌

                const $todo = $from.querySelector('input[name=todo]')
                const text = $todo.value

                if(text.length > 1) {
                    $todo.value = '' // 폼 비우기. 엔터만 치면 빈값이 들어가기 때문에 if문으로 길이 제한
                    onSubmit(text)
                }
            })
            isInit = true
        }
    }

    this.render()
}