export default function PhotoList({ $target, initialState, onScrollEnded}) {
    let isInitialize = false
    
    const $photoList = document.createElement('div')
    $target.appendChild($photoList)
    this.state = initialState

    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if(entry.isIntersecting && !this.state.isLoading) {
                console.log('화면 끝!!', entry)
                onScrollEnded()
            }
        })
    }, {
        threshold: 0
    })

    let $lastLi = null

    this.setState = nextState => {
        this.state = nextState
        this.render()
    }

    this.render = () => {
        if(isInitialize) {
            $photoList.innerHTML = `
            <ul class="PhotoList_photos"></ul>
        `
        isInitialize = true
        }
        const {photos} = this.state
        const $photos = $photoList.querySelector('.PhotoList_photos')

        photos.forEach(photo => {
            // photo의 id 기준으로 랜더링이 되어있는지 체크
            if($photos.querySelector(`li[data-id="${photo.id}"]` === null)) {
                // 없으면 li 생성하고 $photos에 appendChild
                const $li = document.createElement('li')
                $li.setAttribute('data-id', photo.id)
                $li.style = 'list-style: none; min-height: 800px;'
                $li.innerHTML = `<img width="100%" src="${photo.imagePath}" />`

                $photos.appendChild($li)
            }
        })

        const $nextLi = $photos.querySelector('li:last-child')

        if($nextLi !== null) {
            if($lastLi !== null) {
                observer.unobserve($lastLi)
            }

            $lastLi = $nextLi
            observer.observe($lastLi)
        }
    }

    this.render()

    window.addEventListener('scroll', () => {
        const { isLoading, totalCount, photos } = this.state
        const isScrollEnded = (window.innerHeight + window.scrollY) +100 >= document.body.offsetHeight

        if(isScrollEnded && !this.state.isLoading && photos.length < totalCount) {
            onScrollEnded()
        }
    })
}