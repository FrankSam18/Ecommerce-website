import React, { useContext } from "react";
import "./Productcard.css";
import { MdStarRate } from "react-icons/md";
import { Link } from "react-router-dom";
import { AppContext } from "../../AppContext";
function ProductCard(item) {
  const { title, rating, image, price, id } = item;
  const { dispatch } = useContext(AppContext);
  const handleAddToCart = () => {
    dispatch({
      type: "ADD",
      payload: item,
    });
  };
  return (
    <div className="product-card">
      <Link to={"/product/" + id}>
        <img src={image} alt={title} className="product-image" />
      </Link>

      <Link to={"/product/" + id} className="title-text">
        {title?.length > 20 ? title.substring(0, 20) + "..." : title}
      </Link>

      <p className="price">Ghc₵{price}</p>
      <MdStarRate color="#1B81CA" />
      <MdStarRate color="#1B81CA" />
      <MdStarRate color="#1B81CA" />
      <MdStarRate color="#1B81CA" />
      <MdStarRate color="gray" />
      <div className="rating">
        2 Available
        {Array.from({ length: rating }, (_, index) => (
          <span key={index} className="rating-icon"></span>
        ))}
      </div>
      <div style={{ textAlign: "center" }}>
        <button onClick={handleAddToCart} className="cart-button">
          Add to Cart
        </button>
      </div>
    </div>
  );
}

export default ProductCard;
