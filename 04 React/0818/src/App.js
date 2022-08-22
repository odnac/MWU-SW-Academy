import { Route, Routes } from "react-router-dom";
import PostsPage from "./pages/PostsPage"
import PostPage from "./pages/PostPage"
import DefaultTemplate from "./components/template/DefaultTemplate"
import NotFoundPage from "./pages/NotFoundPage"

const App = () => {

  return (
    <DefaultTemplate>
      <Routes>
        <Route path="/" exact element={<h1>Home</h1>} />
        <Route path="/posts" exact element={<PostsPage />} />
        <Route path="/posts/:postId" element={<PostPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </DefaultTemplate>
  )
}

export default App;