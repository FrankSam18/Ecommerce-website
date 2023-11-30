import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LandingPage from "../Pages/LandingPage/LandingPage";

import Cartproduct from "../Pages/Viewcart/cartproduct";
import Checkout from "../Pages/checkout/Checkout";
import Payment from "../Pages/Payment/Payment";
import Delivery from "../Pages/delivery/Delivery";
import Productlist from "../Pages/Productlist/Productlist"; 
import Productdescription from "../Pages/ProductDescription/ProductDescription";

const AppRouter = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage/>} />
        <Route path="/products" element={<Productlist />} />
        <Route path="/product/:id" element={<Productdescription />} />
        <Route path="/cart" element={<Cartproduct/>} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/payment" element={<Payment />} />
        <Route path="/delivery" element={<Delivery />} />
      </Routes>
    </Router>
  );
};

export default AppRouter;