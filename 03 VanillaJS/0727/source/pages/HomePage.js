import { request } from "../api.js"

export default function HomePage({ $target }) {
    const $home = document.createElement('div')

    this.render = () => {
        request('/products').then(products => {
            $home.innerHTML = `
                <h1>Home Page</h1>
                <ul>
                    ${products.map(product => `
                        <li>
                            <a class="link" href="/products/${product.id}">
                                ${product.name}
                            </a>
                        </li>
                    `).join('')}
                </ul>
            `

            $target.appendChild($home)
        })
    }
}