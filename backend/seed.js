const mongoose = require("mongoose");
const dotenv = require("dotenv");
const Food = require("./models/Food");

dotenv.config();

const foods = [
  {
    name: "Classic Cheeseburger",
    image: "https://images.unsplash.com/photo-1550547660-d9450f859349",
    price: 8.99,
  },
  {
    name: "Pepperoni Pizza",
    image: "https://images.unsplash.com/photo-1601925260891-c3c9e3ed7b11",
    price: 11.49,
  },
  {
    name: "Chicken Tacos",
    image: "https://images.unsplash.com/photo-1613145993481-3ed1e47c3e8a",
    price: 9.25,
  }
];

mongoose.connect(process.env.MONGO_URI)
  .then(async () => {
    console.log("Connected to MongoDB for seeding.");
    await Food.deleteMany(); // ⬅️ Clear existing data
    return Food.insertMany(foods);
  })
  .then(() => {
    console.log("🌮 Sample food data inserted!");
    mongoose.connection.close();
  })
  .catch((error) => {
    console.error("❌ Seeding failed:", error);
  });
