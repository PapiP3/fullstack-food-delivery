const mongoose = require("mongoose");
const dotenv = require("dotenv");
const Food = require("./models/Food");

dotenv.config();

mongoose.connect(process.env.MONGO_URI)
  .then(() => {
    console.log("Connected to MongoDB for seeding.");
    return Food.insertMany([
      {
        name: "Classic Cheeseburger",
        image: "https://source.unsplash.com/400x300/?cheeseburger",
        price: 8.99,
      },
      {
        name: "Pepperoni Pizza",
        image: "https://source.unsplash.com/400x300/?pepperoni-pizza",
        price: 11.49,
      },
      {
        name: "Chicken Tacos",
        image: "https://source.unsplash.com/400x300/?tacos",
        price: 9.25,
      },
      {
        name: "Sushi Platter",
        image: "https://source.unsplash.com/400x300/?sushi",
        price: 13.75,
      },
      {
        name: "Pad Thai",
        image: "https://source.unsplash.com/400x300/?pad-thai",
        price: 10.50,
      },
    ]);
  })
  .then(() => {
    console.log("🌮 Sample food data inserted!");
    mongoose.connection.close();
  })
  .catch((error) => {
    console.error("❌ Seeding failed:", error);
  });
