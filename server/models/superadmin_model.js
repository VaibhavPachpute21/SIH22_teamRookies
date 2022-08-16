const mongoose = require('mongoose')

const superadminSchema = new mongoose.Schema({
    email:{
        type: String,
        unique: true,
        match: [
            /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
            "Please provide a valid email"
        ]
    },
    fullname:{
        type:String,
        required:true
    },
    gender:{
        type:String,
        enum:["m","f"]
    },
    dob:{
        type:String,
        required:true
    },
    role:{
        type:String,
        default:3
    },
    password:{
        type:String,
        require:true
    },
    phone_number: {
        type: String,
    }

})

superadminSchema.pre("save", async function (next) {
    var user = this;
    if (!user.isModified("password")) {
        next();
    }
    const salt = await bcrypt.genSalt(10)
    user.password = await bcrypt.hash(user.password, salt)
    next()

})


superadminSchema.methods.getSignedToken = async function () {
    const token = jwt.sign({ id: this._id }, process.env.JWT_SECRET, {
        expiresIn: process.env.JWT_EXPIRES
    })
    return token
}

superadminSchema.methods.comparePassword = async function (password) {
    return await bcrypt.compare(password, this.password)
}


const SuperAdmin = mongoose.model('SuperAdmin', superadminSchema)

module.exports = {
    SuperAdmin
}