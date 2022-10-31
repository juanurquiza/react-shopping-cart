class Cart {
  constructor() {
    this.items = []
  }

  addItem(product) {
    const existingItem = this.items.find(i => i.id === product.id)
    if (existingItem) {
      existingItem.quantity += 1
      return existingItem
    } else {
      const newItem = {
        id: product.id,
        name: product.title,
        price: product.price,
        quantity: 1,
      }
      this.items.push(newItem)
      return newItem
    }
  }

  removeItem(item) {
    if (!this.items.find(i => i.id === item.id)) {
      throw new Error('Error: product does not exist in the cart')
    }
    this.items = this.items.filter(i => i.id !== item.id)
  }

  getItem(product) {
    return this.items.find(item => item.id === product.id)
  }
}

export default Cart
