// params.$target - 해당 컴포넌트가 추가가 될 DOM 엘리먼트
// Params.initialState - 해당 컴포넌트의 초기 상태
function todoList1(params) {
    const $todoList = document.createElement('div');
    const $target = params.$target;
    $target.appendChild($todoList);

    this.state = params.initialState;

    this.render = () => {
        // this.state = [{ text: '자바스크립트 공부하기' }, {text: '....'}]
        // map을 돈 이후에는 아래처럼 만들어집니다.
        /* 
          * this.state.map(todo => `<li>${todo.text}</li>
            [{ text: '자바스크립트 공부하기' }, {text: '....'}]
            [<li>'자바스크립트 공부하기,'....'</li>]

          * join('')
            <li>자바스크립트 공부하기</li><li>....</li>
        
        */
        $todoList.innerHTML = `
            <ul>
                ${this.state.map(todo => `<li>${todo.text}</li>`).join('')}
            
            </ul>
        `
        /*  명령형
            let html = ''

            for(let i = 0; i < this.state.length; i++) {
                html += `<li>${this.state[i].text}</li>`;
            }

            html = `<ul>${html}</ul>`

            $todoList.innerHTML = html;
        */
    }
    this.render();
}