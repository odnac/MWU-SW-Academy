export default function Keyword({ $target }) {
    const $keyword = document.createElement('input')
    $keyword.className = 'Keyword'

    $target.appendChild($keyword)
}