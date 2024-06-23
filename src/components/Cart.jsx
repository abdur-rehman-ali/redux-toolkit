import React, { useState, useEffect } from 'react'
import Navbar from './Navbar'
import axios from 'axios'

const Cart = () => {
  const [products, setProducts] = useState([])

  useEffect(() => {
    async function fetchProducts() {
      const { data } = await axios.get('https://fakestoreapi.com/products')
      setProducts(data)
    }
    fetchProducts()
  }, [])


  return (
    <>
      <Navbar />
      <h1>Cart</h1>
      <div className="cartWrapper">
        {products.map((product) => (
          <div key={product.id} className="cartCard">
            <img src={product.image} alt="" />
            <h5>{product.title}</h5>
            <h5>{product.price}</h5>
            <button
              className="btn"
              onClick={() => {}}
            >
              Remove
            </button>
          </div>
        ))}
      </div>
    </>
  )
}

export default Cart