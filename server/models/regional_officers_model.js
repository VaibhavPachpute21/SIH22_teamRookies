const mongoose = require('mongoose')
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')

const regionalofficerSchema = new mongoose.Schema({
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
        type: String,
        default:2
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
    university: {
        type: String,
    },
    district: {
        type: String,
    },
    university_nodal_no:{
        type:Number,
        default:0
    },
    region:{
        type:String,
        enum:["east","west","north","south"]
    },  
    state: {
        type: String,
    },
    solve_count:{
        type:Number,
        default:0
    }
},{timestamps:true})

regionalofficerSchema.pre("save", async function (next) {
    var user = this;
    if (!user.isModified("password")) {
        next();
    }
    const salt = await bcrypt.genSalt(10)
    user.password = await bcrypt.hash(user.password, salt)
    next()

})


regionalofficerSchema.methods.getSignedToken = async function () {
    const token = jwt.sign({ id: this._id }, process.env.JWT_SECRET, {
        expiresIn: process.env.JWT_EXPIRES
    })
    return token
}

regionalofficerSchema.methods.comparePassword = async function (password) {
    return await bcrypt.compare(password, this.password)
}



const RegionalOfficer = mongoose.model('RegionalOfficer',regionalofficerSchema)

module.exports = {RegionalOfficer}
