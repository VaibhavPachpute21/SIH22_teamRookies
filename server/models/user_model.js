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
        ]
    },
    password: {
        type: String,
        required: true,
        minlength: 6,
        select: false
    },
    role: {
        type: Number,
    },
    fullname: {
        type: String,
        maxlength: 20
    },
    committee: {
        type: String,
    },
    avatar: {
        type: String,
        default: "Link"
    },
    banner: {
        type: String,
        default: "Link"
    },
    phone_number: {
        type: String,
    },
    college_name: {
        type: String,
    },
    university: {
        type: String,
    },
    district: {
        type: String,
    },
    state: {
        type: String,
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