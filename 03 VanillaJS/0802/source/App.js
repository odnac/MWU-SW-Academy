import { request } from "./api.js"
import Breadcrumb from "./Breadcrumb.js"
import ImageViewer from "./ImageViewer.js"
import Loading from "./Loading.js"
import Nodes from "./Nodes.js"

export default function App({ $target }) {
    this.state = {
        isRoot: true,
        isLoading: false,
        nodes: [],
        paths: []
    }

    const loading = new Loading({
      $target
    })

    const breadcrumb = new Breadcrumb({
      $target,
      initialState: this.state.paths,
      onClick: async (id) => {
        // 클릭한 경로 외에 paths를 날려준다.
        if (id) {
          const nextPaths = [...this.state.paths]
          const pathIndex = nextPaths.findIndex(path => path.id === id)

          this.setState({
            ...this.state,
            paths: nextPaths.slice(0, pathIndex + 1)
          })
        } else {
          this.setState({
            ...this.state,
            paths: []
          })
        }
        const index = nextPaths.findIndex(path => path.id === id)

        await fetchNodes(id)
      }
    })
    
    const nodes = new Nodes({
        $target,
        initialState: {
            isRoot: this.state.isRoot,
            nodes: this.state.nodes,
            selectedImageUrl: null,
        },

        onClick: async (node) => {
          if(node.type === 'DIRECTORY') {
            await fetchNodes(node.id) 

            this.setState({
              ...this.state,
              paths: [...this.state.paths, node]
            })
          }

          if(node.type === 'FILE') {
            this.setState({
              ...this.state,
              selectedImageUrl: `https://cat-api.roto.doces/static${node.filePath}`
            })
          }
        },

        onPrevClick: async () => {
          const nextPaths = [...this.state.paths]
          nextPaths.pop()
          this.setState({
            ...this.state,
            paths: nextPaths
          })

          if(nextPaths.length === 0) {
            await fetchNodes()
          } else {
            await fetchNodes(nextPaths[nextPaths.length - 1].id)
          }
        }
    })

    const imageViewer = new ImageViewer({
      imageUrl: this.state.imageUrl,
      onClose: () => {
        this.setState({
          ...this.state,
          selectedImageUrl: null
        })
      }
    })

    this.setState = nextState => {
      this.state = nextState

      nodes.setState({
          isRoot: this.state.isRoot,
          nodes: this.state.nodes
      })

      imageViewer.setState({
        selectedImageUrl: this.state.selectedImageUrl
      })

      loading.setState(this.state.isLoading)

      breadcrumb.setState(this.state.paths)
    }

    const fetchNodes = async (id) => {
      this.setState({
        ...this.state,
        isLoading: true
      })
        const nodes = await request(id ? `/${id}` : '/')

        this.setState({
            ...this.state,
            nodes,
            isRoot: id ? false : true,
            isLoading: false
        })
    }

    fetchNodes()
}