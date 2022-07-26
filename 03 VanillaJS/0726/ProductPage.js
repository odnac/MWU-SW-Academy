import ProductOptions from "./ProductOptions.js"
import { request } from "./api.js"
/* state 구조

    {
        productId: 1,
        product: Product,
        optionData: []
    }
*/

export default function ProductPage({
    $target,
    initialState
}) {
    const $product = document.createElement('div')
    
    $target.appendChild($product)
    this.state = initialState 

    const productOptions = new ProductOptions({
        $target: $product,
        initialState: [],
        onSelect: (option) => {
            console.log(option)
        }
    })

    this.setState = nextState => {
        if(nextState.productId !== this.state.productId){
            fetchOptionData(nextState.productId)
            return
        }
        this.state = nextState
        productOptions.setState(this.state.optionData)
    }

    this.render = () => {}
    this.render()

    const fetchOptionData = (productId) => {
        return request(`/products/${productId}`)
          .then((product) => {
            this.setState({
              ...this.state,
              product,
              optionData: [],
            });
            return request(`/product-options?product.id=${product.id}`);
           
          })
          .then((productOptions) => {
            return Promise.all([
              Promise.resolve(productOptions),
              Promise.all(
                productOptions
                  .map((productOption) => productOption.id)
                  .map((id) => {
                    return request(`/product-option-stocks?productOption.id=${id}`);
                    
                  })
              ),
            ]);
          })
          .then((data) => {
            const [productOptions, stocks] = data;
            const optionData = productOptions.map((productOption, i) => {
              const stock = stocks[i][0].stock;
    
              return {
                optionId: productOption.id,
                optionName: productOption.optionName,
                optionPrice: productOption.optionPrice,
                stock,
              };
            });
    
            this.setState({
              ...this.state,
              optionData,
            });
          });
      };
    
      fetchOptionData(this.state.productId);
    }