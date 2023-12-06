import React from "react";
import "./GalleryItem.css";
const GalleryItem = ({ image, children }) => {
  return (
    <div className="gallery-box" style={{ backgroundImage: `url(${image})` }}>
      {children}
    </div>
  );
};

export default GalleryItem;