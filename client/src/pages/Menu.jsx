import React from "react";
import Navbar from "../components/Navbar";
import FoodGallery from "../components/FoodGallery";

function Menu() {
  return (
    <>
      <Navbar />
      <main
        style={{
          maxWidth: "1200px",
          margin: "0 auto",
          padding: "20px",
        }}
      >
        <h1>Menu</h1>
        <FoodGallery />
      </main>
    </>
  );
}

export default Menu;
