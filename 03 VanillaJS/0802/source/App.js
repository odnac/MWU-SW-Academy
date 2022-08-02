import { request } from "./api.js"
import Nodes from "./Nodes.js"

export default function App({ $target }) {
    this.state = {
        isRoot: true,
        nodes: []
    }

    const nodes = new Nodes({
        $target,
        initialState: {
            isRoot: this.state.isRoot,
            nodes: this.state.nodes
        },
        onClick: async (node) => {
          if(node.type === 'DIRECTORY') {
            await fetchNodes(node.id) 
          }
        }
    })

    this.setState = nextState => {
        this.state = nextState

        nodes.setState({
            isRoot: this.state.isRoot,
            nodes: this.state.nodes
        })
    }

    const fetchNodes = async (id) => {
        const nodes = await request(id ? `/${id}` : '/')

        this.setState({
            ...this.state,
            nodes,
            isRoot: id ? false : true
        })
    }

    fetchNodes()
}