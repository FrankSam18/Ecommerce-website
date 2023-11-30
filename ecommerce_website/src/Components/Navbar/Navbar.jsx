import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { IoMdSearch } from "react-icons/io";
import { BsCart2 } from "react-icons/bs";
import "./Navbar.css";
import { AppContext } from "../../AppContext";

const Navbar = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(true);
  // Example cart item count
  const {cart} = useContext(AppContext);
  console.log(cart)
  return (
    <div>
      <nav className="navbar">
        <span className="logo">Logo</span>
        <Link to="/Retail" className="Retail-btn">
          Retail
        </Link>
        <form action="#" className="search-form">
          <div className="search-box-wrapper">
            <input type="search" name="" id="" className="search-box" />
            <button type="submit" className="search-button">
              <IoMdSearch />
            </button>
          </div>
        </form>
        <div className="cart-wrapper">
          <span className="cart-icon">
            <BsCart2 />
           
              <span className="cart-count">{cart.length}</span>
         
          </span>
        </div>
        <div className="account-box">
          {isLoggedIn ? (
            <div className="profile-wrapper">
              <span>username</span>
              <img
                src="https://images.unsplash.com/photo-1613005798967-632017e477c8?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt=""
                className="profile-image"
              />
            </div>
          ) : (
            <div className="login-signup-wrapper">
              <Link to="/login" className="login-btn">
                Login
              </Link>
              <Link to="/signup" className="signup-btn">
                Signup
              </Link>
            </div>
          )}
        </div>
      </nav>
    </div>
  );
};

export default Navbar;