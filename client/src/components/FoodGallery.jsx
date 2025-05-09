import React, { useEffect, useState } from "react";
import { fetchFoods } from "../util/api";
import FoodCard from "./FoodCard";
import "./FoodGallery.css";

export default function FoodGallery() {
  const [foods, setFoods] = useState([]);

  useEffect(() => {
    fetchFoods()
      .then((data) => setFoods(data))
      .catch((error) => console.error("Error fetching foods:", error));
  }, []);

  return (
    <div className="gallery-container">
      {foods.map((food) => (
        <FoodCard key={food._id} food={food} />
      ))}
    </div>
  );
}
