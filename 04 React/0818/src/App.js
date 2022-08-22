import { Route, Routes } from "react-router-dom";
import PostsPage from "./pages/PostsPage"
import PostPage from "./pages/PostPage"
import DefaultTemplate from "./components/template/DefaultTemplate"
import NotFoundPage from "./pages/NotFoundPage"
import Input from "./components/input";
import { useRef } from "react";

const App = () => {

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

  /*  React (9) 사용자 정의 Hook 연습하기 - useImperativeHandle
   */
  const inputRef = useRef()
  return (
    <div>
      <Input ref={inputRef}/>
      <button onClick={() => inputRef.current.focus()}>Focus</button>
      <button onClick={() => inputRef.current.clear()}>Clear</button>
    </div>
  )
}

export default App;