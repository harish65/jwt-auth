const express = require('express');

const connection = require("mongoose");
connection.connect("mongodb://localhost:27017/jwt-auth-db", {
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(() =>{
  console.log("connection successful");

}).catch((err) => console.log(err))


module.exports = connection;