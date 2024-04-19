const express = require("express");
const router = express.Router();

// Import model
const Application = require("../models/Application");

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

// Fetching sitters from the database
router.get("/sitterslist", async (req, res) => {
  try {
    let sitters = await RegisterSitter.find()
    res.render("sitter", {sitters:sitters});

  } catch (error) {
    res.status(400).send("unable to fetch sitters from the database")
  }
})

// Delete Route
router.post("/delete", async (req, res) =>{
    try { //try block
      await RegisterSitter.deleteOne({_id:req.body.id});
    res.redirect("back")
    } catch (error){
      res.status(400).send("unable to delete sitter from the db")
      console.log("Error deleting sitter", error);
    }
  
});

module.exports = router;
