const mongoose = require('mongoose')
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')

const instituteSchema = new mongoose.Schema({
    institute_name:{
        type:String
    },
    institute_code:{
        type:String
    },
    institute_region:{
        type:String
    },
    institute_district:{
        type:String
    },
    institute_state:{
        type:String
    },
    institute_address:{
        type:String
    },
    institute_pincode:{
        type:String
    },
    institute_std_code:{
        type:String
    },
    institute_year_of_start:{
        type:String
    },
    institute_web_address:{
        type:String
    },
    institute_email:{
        type:String
    },
    institute_university:{
        type:String
    },
    name_of_director:{
        type:String
    },
    director_email:{
        type:String
    },
    director_phone_number:{
        type:String
    },
    user_name:{
        type:String
    },
    user_phone:{
        type:String
    },
    user_email:{
        type:String
    },
    password:{
        type:String
    },
    role:{
        type:String,
        default:"0I"
    }
},{timestamps:true})

instituteSchema.pre("save", async function (next) {
    var user = this;
    if (!user.isModified("password")) {
        next();
    }
    const salt = await bcrypt.genSalt(10)
    user.password = await bcrypt.hash(user.password, salt)
    next()

})

instituteSchema.methods.getSignedToken = async function () {
    const token = jwt.sign({ id: this._id }, process.env.JWT_SECRET, {
        expiresIn: process.env.JWT_EXPIRES
    })
    return token
}

instituteSchema.methods.comparePassword = async function (password) {
    return await bcrypt.compare(password, this.password)
}


const Institute = mongoose.model('Institute',instituteSchema)

module.exports = {Institute}

