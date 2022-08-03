export default function SearchResults({ $target, initialState }) {
    const $searchResults = document.createElement('div')
    $target.appendChild($searchResults)
    $searchResults.className = 'SearchResults'

    this.state = initialState

    this.setState = nextState => {
        this.state = nextState
        this.render()
    }

    this.render = () => {
        $searchResults.innerHTML = `
            ${this.state.map(result => `
                <div>
                    {img src="${result.url}" ?>
                </div>
            `).join('')}
        `
    }

    this.render()
}