const express = require("express");
const router = express.Router();

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

module.exports = router;
