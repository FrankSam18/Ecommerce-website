import React from "react";
import Navbar from "../Navbar/Navbar";
import Aux_Navbar from "../Navbar/Aux_navbar";
import Footer from "../Footer/Footer";

const Layout = ({ pageNumber, children }) => {
  return (
    <div>
      <Navbar />
      <Aux_Navbar />
      {children}
      <Footer />
    </div>
  );
};

export default Layout;