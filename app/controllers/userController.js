var User = require('../Model/usersModel')
var bcrypt = require("bcryptjs");
const jwt = require('jsonwebtoken');


exports.getUsers = (req, res, next) => {       
    User.find().then((err , users) => {
        if (err) {
                    res.status(500).send(err);
                  } else {
                    res.status(200).send({users : users});
                  }
    })
    
};

exports.register = async  (req , res) => {
    const {first_name , last_name , email,phone,country,state,username , role} = req.body
    if (req.body.password.length < 6) {
        return res.status(400).json({ message: "Password less than 6 characters" })
    }
    var password =  await bcrypt.hash(req.body.password, 10);

    try {
        
        await User.create({
            first_name, 
            last_name,
            email,
            phone,
            country,
            state,
            username, 
            password, 
            role
        }).then(user =>
            res.status(200).json({
                message: "User successfully created",
            user,
        })
        )
    } catch (err) {//db , 
        res.status(401).json({
            message: "User not created",
        error: err.mesage,
        })
        
        
    }   
}



exports.login = async (req , res) => {
    var username = req.body.username;        
    var password = req.body.password;        

    if (!username ) {
        return res.status(400).json({ message: "Username is required" })
    }
    if (!password ) {
        return res.status(400).json({ message: "Password is required" })
    }
    try{
        
        const user = await User.findOne({ username});
        console.log(user.password , password);return;
        


       


        return res.status(200).json({message : token})
    }catch(err) {
        res.status(401).json({
            message: "Email or password is wrong!Please try again",
        error: err.mesage,
        })
    }
}