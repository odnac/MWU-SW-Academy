// import Header from "./component/Header";
// import SearchBox from "./component/SearchBox";
// import { useState } from "react"
// import emojiJson from "./data/emoji.json"
// import EmojiList from "./component/EmojiList";
import styled from "@emotion/styled";
import Header from "./component/Header";
import NewTaskForm from "./component/NewTaskForm";
import TaskList from "./component/TaskList";
import TaskProvider from "./contexts/TaskProvider";

const Container = styled.div`
  width: 400px;
  margin: 0 auto;
`

function App() {

  /* 사용 사례 - 검색
  */
  // const [keyword, setKeyword] = useState('')

  // return (
  //   <div>
  //     <Header />
  //     <SearchBox onSearch={setKeyword} />
  //     <EmojiList emojis={emojiJson} keyword={keyword}/>
  //   </div>
  // );

  return (
    <TaskProvider>
      <Container>
        <Header>ToDo</Header>
        <NewTaskForm />
        <TaskList css={{marginTop: 16}}/>
      </Container>
    </TaskProvider>
  )
}

export default App;
