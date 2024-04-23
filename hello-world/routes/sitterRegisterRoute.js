const express = require("express");
const router = express.Router();

// Import model
const Register = require("../models/RegisterSitter");

router.get("/registersitter", (req, res) => {
  res.render("register_sitter");
});

// Installing the async function
router.post("/registersitter", async (req, res) => {
  try {
    const sitter = new Register(req.body);
    console.log(sitter);
    await sitter.save();
    res.redirect("/registersitter");
  } catch (error) {
    res.status(400).send("Sorry, something went wrong");
    console.log("Error registering a sitter", error);
  }

});

// Fetching sitters from the database
router.get("/sitterslist", async (req, res) => {
  try {
    let sitters = await Register.find({role:"sitter"})
    res.render("sittersmanagement", {sitters:sitters});

  } catch (error) {
    res.status(400).send("unable to fetch sitters from the database")
  }
})

// Delete Route
router.post("/delete", async (req, res) =>{
    try { //try block
      await Register.deleteOne({_id:req.body.id});
    res.redirect("back")
    } catch (error){
      res.status(400).send("unable to delete sitter from the db")
      console.log("Error deleting sitter", error);
    }
  
});

// Updating a baby in the database
router.get("/babiesUpdate/:id", async (req, res) =>{
  try {
    const babyUpdate = await Register.findOne({_id: req.params.id});
    res.render("sittersUpdate", {baby:sitterUpdate})
  } catch (error) {
    console.log("Error finding a baby", error);
    res.status(400).send("Unable to find sitters from the db")
  }
})

router.post("/sitterUpdate", async(req, res) =>{
  try {
    await Register.findOneAndUpdate({_id: req.query.id}, req.body);
    res.redirect("/sitterslist");
  } catch (error) {
    res.status(404).send("Unable to update sitters in the db");
 
  }
})

module.exports = router;
