import axios from 'axios'
import useAsync from './hooks/useAsync'
import Header from "./components/Header"
import Spinner from "./components/Spinner"

const App = () => {
  const initialPosts = useAsync(async () => {
    return await axios
    .get('https://jsonplaceholder.typicode.com/posts')
    .then((response) => response.data)
  }, [])

  return (
    <div>
      <Header>Posts</Header>
      <ul>
        {initialPosts.isLoading ? <Spinner /> : (initialPosts.value || []).map(post => <li key={post.id}>{post.title}</li>)}
      </ul>
    </div>
    )
}

export default App;
