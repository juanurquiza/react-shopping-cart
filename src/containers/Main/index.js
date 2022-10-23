import { useEffect, useState } from 'react'
import Product from 'models/Product'
import './main.css'

// TODO: add tests for this component once we have it working.
function App() {
  // For now, we'll define the state of the application in this
  // main component.
  // TODO: Later, we'll use the Context to share the state.
  // And then, we'll switch to Redux to handle de application state.
  const [products, setProducts] = useState([])

  useEffect(() => {
    async function fetchData() {
      setProducts(await Product.getProducts())
    }
    fetchData()
  }, [])

  // TODO: pass the products through props for now
  return (
    <div className="main">
      <header className="header">
        <p>
          Lets put the shopping cart header here
        </p>
      </header>
      <section className="body">
        And here the body (e.g. product list, etc)
      </section>
    </div>
  )
}

export default App
