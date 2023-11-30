import React, { useContext } from "react";
import Layout from "../../Components/Layout/Layout";
import "./Cart.css";
import { AppContext } from "../../AppContext";

const Cart = () => {
  const { cart } = useContext(AppContext);

  return (
    <Layout pageNumber={1}>
      <div className="cart-view-container">
        {cart.map((item) => {
          return (
            <div className="image-box" key={item.id}>
              <div>
                <img className="cart-image" src={item.image} alt="product" />
              </div>
              <p>{item.title}</p>
            </div>
          );
        })}
      </div>
    </Layout>
  );
};

export default Cart;