import React from "react";
import "./FoodCard.css";

function FoodCard({ title, image, price }) {
  return (
    <div className="food-card">
      <img src={image} alt={title} />
      <h3>{title}</h3>
      <p>${price.toFixed(2)}</p>
    </div>
  );
}

export default FoodCard;
