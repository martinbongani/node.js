const express = require("express");
const router = express.Router();

// Import model
const Application = require("../models/Application");
const { get } = require("mongoose");

router.get("/register", (req, res) => {
  res.render("babyapplication");
});

// Installing the async function
router.post("/register", async (req, res) => {
  try {
    const baby = new Application(req.body);
    console.log(baby);
    await baby.save();
    res.redirect("/babieslist");
  } catch (error) {
    res.status(400).send("Sorry, something went wrong");
    console.log("Error registering the baby", error);
  }

});

// Fetching babies from the database
router.get("/babies", async (req, res) => {
  try {
    let sitters = await RegisterBaby.find()
    res.render("babies", {babies:babies});

  } catch (error) {
    res.status(400).send("unable to fetch babies from the database")
  }
})

// Delete Route
router.post("/delete", async (req, res) =>{
    try { //try block
      await RegisterBaby.deleteOne({_id:req.body.id});
    res.redirect("back")
    } catch (error){
      res.status(400).send("unable to delete sitter from the db")
      console.log("Error deleting sitter", error);
    }
  
});

// Updating a baby in the database
router.get("/babiesUpdate/:id", async (req, res) =>{
  try {
    const babyUpdate = await RegisterBaby.findOne({_id: req.params.id});
    res.render("babiesUpdate", {baby:babyUpdate})
  } catch (error) {
    console.log("Error finding a baby", error);
    res.status(400).send("Unable to find baby from the db")
  }
})

router.post("/babiesUpdate", async(req, res) =>{
  try {
    await RegisterBaby.findOneAndUpdate({_id: req.query.id}, req.body);
    res.redirect("/register");
  } catch (error) {
    res.status(404).send("Unable to update baby in the db");
 
  }
})

module.exports = router;
