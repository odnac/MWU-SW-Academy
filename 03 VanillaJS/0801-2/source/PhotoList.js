export default function PhotoList({ $target, initialState, onScrollEnded }) {
  let isInitialize = false;

  const $photoList = document.createElement("div");
  $target.appendChild($photoList);
  this.state = initialState;

  this.setState = (nextState) => {
    this.state = nextState;
    this.render();
  };
  this.render = () => {
    if(!isInitialize){
        $photoList.innerHTML = `
        <ul class="PhotoList_photos">
        <button class="PhotoList_LoadMore" style= "width:100%; height:200px;font-size:60px" > Load More</button>
        `
        
        isInitialize = true
    }

    const $photos = $photoList.querySelector('.PhotoList_photos')
    
    $photos.innerHTML = `
    
        ${this.state.map(photo=>{
              return`
                <li style="list-style: none;">
                    <img width ="100%" src ="${photo.imagePath}"/>
                </li>
            `
        }
          ).join("")}
        ` 
  };
  this.render();

  $photoList.addEventListener("click", (e) => {
    if (e.target.className === "PhotoList_LoadMore") {
      //alert('click check!')
      onScrollEnded();
    }
  });
}
