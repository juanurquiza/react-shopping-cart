import Product from 'components/Product'
import './style.scss'

const ProductList = (props) => {
    const {
        products,
        cart,
    } = props

    return (
        <div className='product-list'>
          {
            products.map(product => (
              <Product
                key={product.id}
                product={product}
                cart={cart}
              />
            ))
          }
        </div>
      )
}

export default ProductList