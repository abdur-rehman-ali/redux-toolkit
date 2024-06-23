import React from 'react';
import { useSelector } from 'react-redux';
import { Link, Outlet } from 'react-router-dom';

const Navbar = () => {
  const cartItems = useSelector((state) => state.cart)

  return (
    <>
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
        }}
      >
        <span className="logo">
          <Link className="navLink" to="/">
            Redux Toolkit Store
          </Link>
        </span>
        <div>
          <Link className="navLink" to="/">
            Home
          </Link>
          <Link className="navLink" to="/products">
            Products
          </Link>
          <Link className="navLink" to="/cart">
            Cart
          </Link>
          <span className="cartCount">Cart items: { cartItems.length }</span>
        </div>
      </div>
      {Outlet}
    </>
  );
};

export default Navbar;