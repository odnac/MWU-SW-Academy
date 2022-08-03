import { request } from "./api.js";
import Header from "./Header.js";
import SuggestKeywords from "./SuggestKeywords.js";

export default function App({ $target }){
    this.state = {
        keyword: '',
        keywords: [],
    }

    this.setState = nextState => {
        this.state = nextState
        header.setState({
            keyword: this.state.keyword
        })
        suggestKeywords.setState(this.state.keywords)
    }

    const header = new Header({ 
        $target, 
        initialState: {
            keyword: this.state.keyword
        },
        onKeywordInput: async (keyword) => {
            if(keyword.trim().length > 1) {
                const keywords = await request(`/search?q=${keyword}`)

                this.setState({
                    ...this.state,
                    keyword,
                    keywords
                })
            }
        }
    })

    const suggestKeywords = new SuggestKeywords({
        $target,
        initialState: this.state.keywords,
        onKeywordSelect: (keyword) => {
            this.setState({
                ...this.state,
                keyword
            })
        }
    })
}