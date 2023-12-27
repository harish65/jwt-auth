var connection = require("../config/databse");
var Mongoose = require('mongoose');


const UserSchema = new Mongoose.Schema({
    first_name: {
      type: String,
      required: true,
    },
    last_name: {
      type: String,     
      required: true,
    },
    username: {
      type: String,
      unique: true,
      required: true,
    },
   
    password: {
      type: String,
      minlength: 6,
      required: true,
    },
    email: {
      type:String,
      unique:true,
      required:true
    },
    phone:{
      type : String,
      unique : true,
      required : true,
    },
    country:{
      type : String,      
      required : true,
    },
    state:{
      type : String,      
      
    },
    role: {
      type: String,
      default: "",
      required: true,
    },
  })

const User = Mongoose.model("user", UserSchema)
module.exports = User