import React from "react";
import "./FoodGallery.css"; // Use this since styles are here

function FoodCard({ food }) {
  return (
    <div className="food-card">
      <img src={food.image} alt={food.name} />
      <h3>{food.name}</h3>
      <p>${food.price.toFixed(2)}</p>
    </div>
  );
}

export default FoodCard;
