const express = require("express");
const router = express.Router();
const { getFoods } = require("../controllers/foodController");

router.get("/foods", getFoods);

module.exports = router;
