
const jwt = require('jsonwebtoken')
const {User} = require('../models/user_model')
const {Officer} = require("../models/officer_model")
exports.protect = async (req,res,next) =>{
    let token;
    if(req.headers.authorization && req.headers.authorization.startsWith("Bearer")){
        token = req.headers.authorization.split(" ")[1]
    }

    if(!token){
        return res.status(401).send("Not authorized")
    }
    try {
        const decoded = jwt.verify(token,process.env.JWT_SECRET)
        const user = await User.findById(decoded.id);

        const officer = await Officer.findById(decoded.id)
      
        if(!user){
            req.user = officer;
            req.type = "officer"
            next();
        }
        if(!officer){
            req.user = user;
            req.type = "user"
            next();
        }
       
    } catch (error) {
        return res.status(401).send("Not Authorized")
    }

}