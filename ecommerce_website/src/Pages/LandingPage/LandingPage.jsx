import React from "react";
import Layout from "../../Components/Layout/Layout";
import "./LandingPage.css";
import GalleryItem from "../../Components/Gallery_item/GalleryItem";

import pic1 from "../../Components/assets/Images/pic1.png";
import pic2 from "../../Components/assets/Images/pic2.png";
import pic3 from "../../Components/assets/Images/pic3.png";
import pic4 from "../../Components/assets/Images/pic4.png";
import pic5 from "../../Components/assets/Images/pic5.png";

const LandingPage = () => {
  return (
    <Layout pageNumber={1}>
      <div className="top-container">
        <h1 className="page-title">Lorem Emporium</h1>
        <div className="content" />
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. <br />
          Nunc vulputate libero et velit.
        </p>
      </div>
      <div className="banner">
        <img src={pic1} alt="" className="main-image" />
      </div>

      <div className="grid-container">
        <GalleryItem image={pic2}>Ready to ship</GalleryItem>
        <GalleryItem image={pic3}>Build your own jacket</GalleryItem>
        <GalleryItem image={pic4}>Stylish Designs</GalleryItem>
        <GalleryItem image={pic5}>Photo Gallery</GalleryItem>
      </div>
    </Layout>
  );
};

export default LandingPage;