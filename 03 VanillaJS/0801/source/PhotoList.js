export default function PhotoList({ $target, initialState, onScrollEnded }) {
  let isInitialize = false;

  const $photoList = document.createElement("div");
  $target.appendChild($photoList);
  this.state = initialState;

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting && !this.state.isLoading) {
          console.log(entry.target);
          if (this.state.totalCount > this.state.photos.length) {
            onScrollEnded();
          }
        }
      });
    },
    {
      threshold: 0.5,
    }
  );

  this.setState = (nextState) => {
    this.state = nextState;
    this.render();
  };

  this.render = () => {
    if (!isInitialize) {
      $photoList.innerHTML = `
        <ul class="PhotoList_photos"></ul>`;

      isInitialize = true;
    }

    const { photos } = this.state;
    const $photos = $photoList.querySelector(".PhotoList_photos");

    photos.forEach((photo) => {
      if ($photos.querySelector(`li[data-id="${photo.id}"]`) === null) {
        const $li = document.createElement("li");
        $li.setAttribute("data-id", photo.id);
        $li.style = `list-style: none; min-height: 800px;`;
        $li.innerHTML = `<img width="100%" src="${photo.imagePath}"/>`;

        $photos.appendChild($li);
      }
    });

    const $lastLi = $photos.querySelector("li:last-child");

    if ($lastLi !== null) {
      //if ($lastLi !== null) {
      //observer.unobserve($lastLi);
      //}

      //$lastLi = $nextLi;
      observer.observe($lastLi);
    }
  };

  this.render();
}
