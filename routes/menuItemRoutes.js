const express = require("express");
const router = express.Router();
const MenuItem = require("../models/MenuItem.js");

// MENU GET METHOD
/*
router.get("/", async (req, res) => {
  try {
    const data = await MenuItem.find();
    console.log("data fetched");
    res.status(200).json(data);
  } catch (err) {
    console.log("error: ", err.message);
    res.status(500).json({ err: "Internal sever error" });
  }
});
*/

// Real world filtering api
router.get("/", async (req, res) => {
  try {
    const { ingredient, taste } = req.query;

    let filter = {};

    if (ingredient) {
      filter.ingredients = { $in: [ingredient] };
    }
    if (taste) {
      filter.taste = taste;
    }

    const response = await MenuItem.find(filter);

    if (response.length === 0) {
      return res.status(404).json({
        message: "No items found with given filters",
      });
    }
    res.status(200).json(response);
  } catch (error) {
    res.status(500).json({ error: "Internal server error" });
  }
});

// POST Method for Menu
router.post("/", async (req, res) => {
  try {
    const data = req.body;
    const newMenuItem = new MenuItem(data);
    const response = await newMenuItem.save();
    console.log("menu items saved successfully");
    res.status(200).json(response);
  } catch (error) {
    console.log(error.message, "Internal server error");
    res.status(500).json({ error: "Internal server error" });
  }
});

// Parametrized method for Menu tasteType
router.get("/taste/:tasteType", async (req, res) => {
  try {
    const tasteType = req.params.tasteType;
    if (
      tasteType === "sweet" ||
      tasteType === "spicy" ||
      tasteType === "sour"
    ) {
      const response = await MenuItem.find({ taste: tasteType });
      console.log("data fetched");
      res.status(200).json(response);
    } else {
      res.status(400).json({ error: "Invalid taste Type" });
    }
  } catch (error) {
    console.log("error: ", error.message);
    res.status(500).json({ error: "Internal server error" });
  }
});

// Parametrized method for Menu ingredients
router.get("/ingredient/:ingredient", async (req, res) => {
  try {
    const ingredient = req.params.ingredient;
    const response = await MenuItem.find({
      ingredients: { $in: [ingredient] },
    });
    if (response.length === 0) {
      return res.status(404).json({
        message: `No Items found with ingredients: ${ingredient}`,
      });
    }
    console.log("data fetched");
    res.status(200).json(response);
  } catch (error) {
    console.log("error: ", error.message);
    res.status(500).json({ error: "Internal server error" });
  }
});

// POST Method for Menu
router.post("/", async (req, res) => {
  try {
    const data = req.body;
    const newMenuItem = new MenuItem(data);
    const response = await newMenuItem.save();
    console.log("menu items saved successfully");
    res.status(200).json(response);
  } catch (error) {
    console.log(error.message, "Internal server error");
    res.status(500).json({ error: "Internal server error" });
  }
});

// comment added for testing purpose

module.exports = router;
