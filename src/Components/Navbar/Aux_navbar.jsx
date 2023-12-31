import React from "react";
import { Link } from "react-router-dom";
import "./Aux_navbar.css"

const Aux_navbar = () => {
  return (
    <nav className="secondary-navbar">
      <ul className="nav-menu">
        <li className="nav-item">
          <Link to="/products" className="nav-link">
            Women
          </Link>
        </li>
        <li className="nav-item">
          <Link to="/products" className="nav-link">
            Men
          </Link>
        </li>
        <li className="nav-item">
          <Link to="/products" className="nav-link">
            Kids
          </Link>
        </li>
        <li className="nav-item">
          <Link to="/products" className="nav-link">
            Accessories
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Aux_navbar;