import PhotoList from "./PhotoList.js";
import { request } from "./api.js";

export default function App({ $target }) {
  const $h1 = document.createElement("h1");
  $h1.innerText = "cat photos";
  $h1.style.textAlign = "center";
  $target.appendChild($h1);

  this.state = {
    limit: 5,
    nextStart: 0,
    photos: [],
  };

  const photoListComponent = new PhotoList({
    $target,
    initialState: this.state.photos,
    onScrollEnded: async()=>{
        await fetchPhotos()
    }
  });

  this.setState = (nextState) => {
    this.state = nextState;
    photoListComponent.setState(nextState.photos);
  };

  const fetchPhotos = async () => {
    const{limit, nextStart}= this.state

    const photos = await request(`/cat-photos?_limit=${limit}&_start=${nextStart}`);
    this.setState({
      ...this.state,
      nextStart: nextStart+limit,
      photos: this.state.photos.concat(photos)
    });
  };
  fetchPhotos();
}
