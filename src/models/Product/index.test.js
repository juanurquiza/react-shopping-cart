import axios from 'axios'
import AxiosMockAdapter from 'axios-mock-adapter'
import Product from './'

const axiosMock = new AxiosMockAdapter(axios)

const productsMock = [
  {
    id: 1,
    title: 'Awesome T-Shirt',
    price: 109.95,
    description: 'Some product description',
    category: "men's clothing",
    image: 'https://example.com/product/1/image.png',
    rating: {
      rate: 3.9,
      count: 120
    }
  },
  {
    id: 2,
    title: 'Fancy pants',
    price: 250.25,
    description: 'Some other product description',
    category: "men's clothing",
    image: 'https://example.com/product/2/image.png',
    rating: {
      rate: 5,
      count: 45
    }
  },
]

// mock product list endpoint
axiosMock.onGet(/products$/).reply(200, productsMock)

// mock get product endpoint
axiosMock.onGet(/products\/\d+$/).reply((config) => {
  const id = Number(config.url.replace(/^.+\/(\d+)$/, '$1'))
  return [200, productsMock.find(p => p.id === id)]
})

describe('ProductModel', () => {
  describe('success usecases', () => {
    it('gets a list of products', async () => {
      const products = await Product.getProducts()
      expect(products).toEqual(productsMock)
    })

    it('gets a product by a given id', async () => {
      const product = await Product.getProduct(2)
      expect(product).toEqual(productsMock[1])
    })
  })

  describe('fail usecases', () => {
    beforeEach(() => {
      axiosMock.onGet(/products$/).reply(500, {
        data: 'Internal server error'
      })
      axiosMock.onGet(/products\/\d+$/).reply(500, {
        data: 'Internal server error'
      })
    })

    it('throws an error if the product list request failed', async () => {
      try {
        await Product.getProducts()
        throw new Error('this should fail')
      } catch(error) {
        expect(error.message).toEqual('Something went wrong, try again later')
      }
    })

    it('throws an error if the product details request failed', async () => {
      try {
        await Product.getProduct(2)
        throw new Error('this should fail')
      } catch(error) {
        expect(error.message).toEqual('Something went wrong, try again later')
      }
    })
  })
})

