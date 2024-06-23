import { useEffect, useState } from "react"
import axios from "axios"
import Navbar from "./Navbar"
import { useDispatch } from "react-redux"
import { addToCart } from "../features/cartSlice"

const Products = () => {
  const [products, setProducts] = useState([])
  const dispatch = useDispatch()

  useEffect(() => {
    async function fetchProducts() {
      const { data } = await axios.get('https://fakestoreapi.com/products')
      setProducts(data)
    }
    fetchProducts()
  }, [])

  return (
    <>
      <Navbar/>
      <div className="productsWrapper">
      {products.map((product) => (
        <div className="card" key={product.id}>
          <img src={product.image} alt="" />
          <h4>{product.title}</h4>
          <h5>${product.price}</h5>
          <button onClick={() => { dispatch(addToCart(product)) }} className="btn">
            Add to cart
          </button>
        </div>
      ))}
    </div>
    </>
  )
}

export default Products
