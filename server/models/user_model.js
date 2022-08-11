const mongoose = require('mongoose')
const bcrypt = require("bcryptjs")
const jwt = require("jsonwebtoken")


const userSchema = new mongoose.Schema({
    email: {
        type: String,
        unique: true,
        match: [
            /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
            "Please provide a valid email"
        ],
        required:true
    },
    password: {
        type: String,
        required: true,
        minlength: 6,
        select: false
    },
    role: {
        type: Number,
        required:true
    },
    fullname: {
        type: String,
        maxlength: 20,
        required:true
    },
    committee: {
        type: String,
        required:true
    },
    avatar: {
        type: String,
        default: "Link",
        required:true
    },
    banner: {
        type: String,
        default: "Link"
    },
    phone_number: {
        type: String,
        required:true
    },
    college_name: {
        type: String,
        required:true
    },
    university: {
        type: String,
        required:true
    },
    district: {
        type: String,
        required:true
    },
    state: {
        type: String,
        required:true
    },
    dob:{
        type:String,
        required:true
    },
    course:{
        type:String,
        required:true
    },
    enrollment:{
        type:Number,
        required:true
    }
},
    {
        timestamps: true
    })

userSchema.pre("save", async function (next) {
    var user = this;
    if (!user.isModified("password")) {
        next();
    }
    const salt = await bcrypt.genSalt(10)
    user.password = await bcrypt.hash(user.password, salt)
    next()

})


userSchema.methods.getSignedToken = async function () {
    const token = jwt.sign({ id: this._id, isAdmin: this.isAdmin }, process.env.JWT_SECRET, {
        expiresIn: process.env.JWT_EXPIRES
    })
    return token
}

userSchema.methods.comparePassword = async function (password) {
    return await bcrypt.compare(password, this.password)
}


const User = mongoose.model('User', userSchema)

module.exports = {
    User
}