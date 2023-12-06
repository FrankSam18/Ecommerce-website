import React, { useContext } from "react";
import Layout from "../../Components/Layout/Layout";
import "./Cart.css";
import { AppContext } from "../../AppContext";
import { MdStoreMallDirectory } from "react-icons/md";
import { Link } from "react-router-dom";

const Cart = () => {
  const { cart } = useContext(AppContext);

  const renderCartItems = () => {
    return cart.map((item) => (
      <div className="cart-card" key={item.id}>
        <img src={item.image} alt="product" />

        <div className="title-box">
          {item.title}
          <div className="title-text">
            <MdStoreMallDirectory />
            Seller: James cottage
            <br />
            <p>2 Available</p>
          </div>
        </div>
        <div className="price">GH₵{item.price}</div>
        <div className="incresement-box">
          <Link to="/Cart" className="">
            <button className="remove-btn">-</button>
          </Link>
          <Link to="/Cart" className="">
            <button className="num-btn">1</button>
          </Link>
          <Link to="/Cart" className="">
            <button className="add-btn">+</button>
          </Link>
        </div>
        <div className="select-box">
          <Link to="/Products" className="remove-box">
            <button className="remove-now-button">Remove</button>
          </Link>
          <Link to="/Payment" className="remove-box">
            <button className="cart-button">Buy Now</button>
          </Link>
        </div>
      </div>
    ));
  };

  return (
    <Layout pageNumber={1}>
      <div className="cart-view-container">{renderCartItems()}</div>
      <button className="check-price-button">GH₵</button>
      <Link to="/Checkout">
        <button className="check-btn">Checkout</button>
      </Link>
    </Layout>
  );
};

export default Cart;
