import { get } from 'services/http'

class Product {
  static async getProducts() {
    try {
      const response = await get('products')
      return response.data
    } catch (error) {
      throw new Error('Something went wrong, try again later')
    }
  }

  static async getProduct(id) {
    try {
      const response = await get(`products/${id}`)
      return response.data
    } catch(error) {
      throw new Error('Something went wrong, try again later')
    }
  }
}

export default Product
