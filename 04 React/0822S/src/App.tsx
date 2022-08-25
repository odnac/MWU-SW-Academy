import { Route, Routes } from "react-router-dom"
import DefaultTemplate from "./components/DefaulTemplate";
import  { NotFoundPage, PostsPage, PostPage  }from "./pages"

function App() {

/*  React (9) react-router : 페이지 이동
*/
  // return (
  //   <DefaultTemplate>
  //     <Routes>
  //       <Route path="/" exact element={<h1>Home</h1>} />
  //       <Route path="/posts" exact element={<PostsPage />} />
  //       <Route path="/posts/:postId" element={<PostPage />} />
  //       <Route path="*" element={<NotFoundPage />} />
  //     </Routes>
  //   </DefaultTemplate>
  // )
  return (
    <DefaultTemplate>
      <Routes>
        <Route path="/" exact element={<h1>Home</h1>} />
        <Route path="/posts" exact element={<PostsPage />} />
        <Route path="/posts/:postId" element={<PostPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </DefaultTemplate>>
  );
}

export default App;
