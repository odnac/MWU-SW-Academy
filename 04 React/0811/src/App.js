import Header from "./component/Header";
import SearchBox from "./component/SearchBox";
import { useState } from "react"
import emojiJson from "./data/emoji.json"
import EmojiList from "./component/EmojiList";

function App() {
  const [keyword, setKeyword] = useState('')

  return (
    <div>
      <Header />
      <SearchBox onSearch={setKeyword} />
      <EmojiList emojis={emojiJson} keyword={keyword}/>
    </div>
  );
}

export default App;
