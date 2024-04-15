const express = require("express");
const router = express.Router();

// Import model
const Application = require("../models/Application");

router.get("/register", (req, res) => {
  res.render("babyapplication");
});

// Installing the async function
router.post("/register", async(req, res) => {
  try {
    const baby = new Application(req.body);
    console.log(baby)
    await baby.save();
    res.redirect("/register")
  } catch (error) {
      res.status(400).send("Sorry, something went wrong")
      console.log("Error registering the baby", error); 
  }
  // res.redirect("/index")
});

module.exports = router;
