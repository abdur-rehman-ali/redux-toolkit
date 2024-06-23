import React from 'react'
import Navbar from './Navbar'
import { useDispatch, useSelector } from 'react-redux'
import { removeFromCart } from '../features/cartSlice'

const Cart = () => {
  const products = useSelector(state => state.cart)
  const dispatch = useDispatch()

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
              onClick={() => { dispatch(removeFromCart(product.id)) }}
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