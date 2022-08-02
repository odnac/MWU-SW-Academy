import Nodes from "./Nodes.js"

export default function App({ $target }) {
    const nodes = new Nodes({
        $target,
        initialState: {
            isRoot: false,
            nodes
        },
        onClick: () => {}
    })
}