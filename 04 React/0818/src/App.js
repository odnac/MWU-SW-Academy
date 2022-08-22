import axios from 'axios'
import useAsync from './hooks/useAsync'
import Header from "./components/Header"
import Spinner from "./components/Spinner"
import PostList from './components/domain/PostList'
import PostProvider from './contexts/PostProvider'
import { useCallback } from 'react'
import PostAddForm from './components/domain/PostAddForm'

const App = () => {
  const initialPosts = useAsync(async () => {
    return await axios
    .get('https://jsonplaceholder.typicode.com/posts')
    .then((response) => response.data)
  }, [])

  const handleAddPost = useCallback(async (post) => {
    return await axios.post(`https://jsonplaceholder.typicode.com/posts`, post).then((response) => response.data)
  }, [])
  
  const handleDeletePost = useCallback(async (id) => {
    return await axios.delete(`https://jsonplaceholder.typicode.com/posts/${id}`).then(() => ({ id }))
  }, [])

  return (
    <PostProvider initialPosts={initialPosts.value} handleDeletePost={handleDeletePost} handleAddPost={handleAddPost}>
      <div>
        <Header>Posts</Header>
        <PostAddForm />
          {initialPosts.isLoading ? <Spinner /> : <PostList />}
      </div>
    </PostProvider>
    )
}

export default App;