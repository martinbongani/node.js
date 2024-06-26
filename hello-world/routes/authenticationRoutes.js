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
  req.session.user = req.user
  if(req.user.role === "admin"){
    res.redirect("/admindash")
  }
  else {res.send("You don't have a role in the system")}
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

router.get("/admindash", (req, res) => {
  res.render("admindashboard")
})

module.exports = router;
