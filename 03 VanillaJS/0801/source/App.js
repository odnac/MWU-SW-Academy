import PhotoList from "./PhotoList.js"
import { request } from "./api.js"

export default function App({ $target }) {
    const $h1 = document.createElement('h1')
    $h1.innerText = 'Cat Photos'
    $h1.style.textAlign = 'center'
    $target.appendChild($h1)

    this.state = {
        limit: 5,
        nextStart: 0, // limit 갯수만큼 계속 더해짐
        photos: [],
        isLoading: false,
    }

    const photoListComponent = new PhotoList({
        $target, 
        initialState: {
            isLoading: this.state.isLoading,
            pthotos: this.state.photos
        },
        onScrollEnded: async () => {
            await fetchPhotos()
        }
    })

    this.setState = (nextState) => {
        this.state = nextState
        photoListComponent.setState({
            isLoading: this.state.isLoading,
            photos: nextState.photos
        })
    }

    const fetchPhotos = async() => {
        this.setState({
            ...this.state,
            isLoading: true
        })
        const {limit, nextStart} = this.state
        const photos = await request(`/cat-photos?_limit=${limit}&_start=${nextStart}`)
        this.setState({
            ...this.state,
            nextStart: nextStart + limit,
            photos: this.state.photos.concat(photos),
            isLoading: false
        })
    } 

    fetchPhotos()
}