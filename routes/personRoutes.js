const express = require("express");
const router = express.Router();
const Person = require("../models/Person.js");

// GET method to get the function
router.get("/", async (req, res) => {
  try {
    const data = await Person.find();
    console.log("data fetched");
    res.status(200).json(data);
  } catch (err) {
    console.log("error: ", err.message);
    res.status(500).json({ err: "Internal sever error" });
  }
});

// Parametrized method for Person
router.get("/:workType", async (req, res) => {
  try {
    const workType = req.params.workType;
    if (
      workType === "chef" ||
      workType === "waiter" ||
      workType === "manager"
    ) {
      const response = await Person.find({ work: workType });
      console.log("data fetched");
      res.status(200).json(response);
    } else {
      res.status(404).json({ error: "Invalid Work Type.." });
    }
  } catch (error) {
    console.log("error: ", error.message);
    res.status(500).json({ error: "Internal server error" });
  }
});

// POST Method For Person
router.post("/", async (req, res) => {
  try {
    //Assuming the request body contains the person data
    const data = req.body;
    // Create a new Person document using the Mongoose model
    const newPerson = new Person(data);
    // Save the new Person to the database
    const response = await newPerson.save();
    console.log("data saved");
    res.status(200).json(response);
  } catch (error) {
    console.log("error: ", error.message);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

// UPDATE OPERATION PUT METHOD
router.put("/:id", async (req, res) => {
  try {
    // Extract the id from the URL parameter
    const personId = req.params.id;
    // Extract the matching data
    const updatesPersonData = req.body;

    const response = await Person.findByIdAndUpdate(
      personId,
      updatesPersonData,
      {
        new: true, // Return the updated document
        runValidators: true, // Run the Mongoose validation
      },
    );

    if (!response) {
      return res.status(404).json({ error: "Person not found" });
    }

    console.log("Data updated");
    res.status(200).json(response);
  } catch (err) {
    console.log("error: ", err.message);
    res.status(500).json({ err: "Internal sever error" });
  }
});

router.delete("/:id", async (req, res) => {
  try {
    const personId = req.params.id;

    const response = await Person.findByIdAndDelete(personId);
    if (!response) {
      return res.status(404).json({ error: "Person not found" });
    }
    console.log("data deleted");
    res.status(200).json({ message: "person deleted successfully" });
  } catch (err) {
    console.log("error: ", err.message);
    res.status(500).json({ err: "Internal sever error" });
  }
});

module.exports = router;
