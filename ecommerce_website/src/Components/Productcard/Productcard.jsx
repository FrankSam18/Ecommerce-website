import React from "react";
import "./ProductCard.css";
import { MdStarRate } from "react-icons/md";


const ProductCard = ({ title, description, rating, image, price }) => {
  const handleAddToCart = () => {
    console.log(`Added ${title} to cart`);
  };

  const renderStarRating = () => {
    const filledStars = Array(Math.round(rating.rate)).fill(
      <span >
        <MdStarRate color="#1B81CA" key={rating.rate} />
      </span>
      ,
    );
    const emptyStars = Array(5 - Math.round(rating.rate)).fill(
      <span  >
        <MdStarRate color="gray" key={5 - rating.rate} />
      </span>
      ,
    );
    return [...filledStars, ...emptyStars];
  };

  return (
    <div className="product-card">
      <img src={image} alt={title} className="product-image" />
      <p className="product-title">{title}</p>
      <p>GHC{price}</p>
      {renderStarRating()}
      <div className="rating">
        {Array.from({ length: rating.rate }, (_, index) => (
          <span key={index} className="rating-icon"></span>
        ))}
      </div>
      <button onClick={handleAddToCart} className="cart-button">
        Add to Cart
      </button>
    </div>
  );
};
export default ProductCard;