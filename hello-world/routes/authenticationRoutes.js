const express = require("express");
const router = express.Router();
const passport = require("passport");

// Import model
const Register = require("../models/Register");

router.get("/register", (req, res) => {
  res.render("adminregistration");
});

// Installing the async function
router.post("/register", async(req, res) => {
   try {
        const adminRegister = new Register(req.body);
        await Register.register(adminRegister, req.body.password,(err)=>{
            if(err){
                throw err
            }
            res.redirect("/register")
        })
   } catch (error) {
        res.status(400).send("User not registered")
        console.log(error)
   }

});

router.get("/login", (req, res) => {
  res.render("login");
});

// Installing the async function
router.post("/login", passport.authenticate("local",{failureRedirect: "/register"}), (req, res) => {
  res.redirect("/registersitter") // Redirect page incase login fails
});


router.get("/logout", (req, res) => {
  if(req.session){
    req.session.destroy((error)=>{
      if(error){
        console.log("------------------", error)
        return res.status(500).send("Error logging out")
      }
      res.redirect("/");
    })
  }
})

router.get("/", (req, res) => {
  res.render("index")
})

module.exports = router;
