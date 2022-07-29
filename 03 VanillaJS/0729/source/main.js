import PostEditPage from "./PostEditPage.js"

const $target = document.querySelector('#app')

// new App({ $target })

const postEditPage = new PostEditPage({
    $target,
    initailState: {
        postId: 'new'
    }
}) 

postEditPage.setState({
    postId: 2
}) 