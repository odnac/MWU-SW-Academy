import ProductOptions from "./ProductOptions.js"
import { request } from "./api.js"

const $target = document.querySelector("#app")

const DEFAULT_PRODUCT_ID = 1

const fetchOptionData = (productId) => {
    return request(`/products/${productId}`)
        .then(product => {
            return request(`/product-options?product.id=${product.id}`)
        })
        .then(productOptions => {
            return Promise.all([
                Promise.resolve(productOptions),
                Promise.all(
                    productOptions.map(productOption => productOption.id).map(id => {
                        return request(`/product-option-stocks?productOption.id=${id}`)     
                })
            )])
        })
        .then(data => {
            const [ productOptions, stocks ] = data
            const optionData = productOptions.map((productOption, i) => {
                const stock = stocks[i][0].stock
                return {
                    optionId: productOption.id,
                    optionName: productOption.optionName,
                    optionPrice: productOption.optionPrice,
                    stock
                }
            })

            productOptionsComponent.setState(optionData)
        })
}

fetchOptionData(DEFAULT_PRODUCT_ID)

const productOptionsComponent = new ProductOptions({
    $target,
    initialState: [],
    onSelect: (option) => {
        alert(option.optionName)
    }
})