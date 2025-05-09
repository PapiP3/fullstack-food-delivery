import React from "react";
import Navbar from "../components/Navbar";
import FoodGallery from "../components/FoodGallery";

function Menu() {
  return (
    <>
      <Navbar />
      <main style={{ padding: "20px" }}>
        <h1>Menu</h1>
        <FoodGallery />
      </main>
    </>
  );
}

export default Menu;
