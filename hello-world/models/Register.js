const mongoose = require("mongoose");
const passportLocalMongoose = require("passport-local-mongoose");

const registerSchema = new mongoose.Schema({
    name:{
      type:String,
      trim:true  
    },
    email:{
        type:String,
        unique:true
    },
     role:{
        type:String,
        trim:true
    },
    
})

registerSchema.plugin(passportLocalMongoose, {
    usernameField:"email"
})
module.exports = mongoose.model("Register", registerSchema)