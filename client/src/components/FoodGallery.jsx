// Gallery component showing static food items

import React from "react";
import FoodCard from "./FoodCard";

const foodItems = [
    {
      title: "Burger Deluxe",
      image: "https://cdn.pixabay.com/photo/2016/03/05/19/02/hamburger-1238246_640.jpg",
      price: 9.99,
    },
    {
      title: "Veggie Pizza",
      image: "https://cdn.pixabay.com/photo/2017/12/09/08/18/pizza-3007395_640.jpg",
      price: 11.49,
    },
  {
    title: "Chicken Wrap",
    image: "https://images.unsplash.com/photo-1552332386-f8dd00dc2f85?auto=format&fit=crop&w=400&q=80",
    price: 8.79,
  },
];

function FoodGallery() {
  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fill, minmax(220px, 1fr))",
        gap: "20px",
        marginTop: "20px",
      }}
    >
      {foodItems.map((item, idx) => (
        <FoodCard
          key={idx}
          title={item.title}
          image={item.image}
          price={item.price}
        />
      ))}
    </div>
  );
}

export default FoodGallery;
