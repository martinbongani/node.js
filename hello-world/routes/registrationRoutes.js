const express = require("express");
const router = express.Router();

// Import model
const Application = require("../models/Application");

router.get("/register", (req, res) => {
  res.render("babyapplication");
});

router.post("/register", (req, res) => {
  const baby = new Application(req.body);
  console.log(baby)
  baby.save();
  // res.redirect("/index")
});

module.exports = router;
