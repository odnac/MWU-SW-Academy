import { request } from "./api.js";
import Header from "./Header.js";
import Keyword from "./Keyword.js";

export default function App({ $target }){
    this.state = {
        keywords: []
    }
    const header = new Header({ 
        $target, 
        onKeywordInput: async (keyword) => {
            if(keyword.trim().length > 1) {
                const keywords = await request(`/search?q=${keyword}`)

                console.log(keywords)
            }
        }
    })
}