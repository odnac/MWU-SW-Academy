import App from "./App.js"
import Editor from "./Editor.js"


const $target = document.querySelector('#app')

// new App({ $target })

new Editor({ $target, initialState:{
    title: '오늘의 학습일지',
    content: 'TypeScript'
} })