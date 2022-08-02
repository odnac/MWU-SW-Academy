export default function ImageViewer({ $target }) {
    const $imageViewer = document.createElement('div')
    $imageViewer.className = 'ImageViewer'

    this.state = {
        imageUrl: null
    }

    this.setState = nextState => {
        this.state = nextState
        this.render()
    }

    this.render = () => {
        $imageViewer.style.display = this.state.imageUrl ? 'block' : 'none'

        $imageViewer.innerHTML = `
            <div class="content">
                <img src = "${this.state.imageUrl}" />
            </div>
        `
    }
    
    this.render()
}