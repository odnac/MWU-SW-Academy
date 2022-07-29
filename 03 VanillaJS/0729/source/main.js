import PostList from "./PostList.js"

const DUMMY_DATA = [
    {
        id: 1,
        title: '테스트1'
    },
    {
        id: 2,
        title: '테스트2'
    },
    {
        id: 3,
        title: '테스트3'
    },
    {
        id: 3,
        title: '테스트3'
    },
]

const $target = document.querySelector('#app')

new PostList({
    $target,
    initialState: DUMMY_DATA
})