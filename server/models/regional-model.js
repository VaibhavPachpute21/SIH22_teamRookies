const mongoose = require('mongoose')


const regionalAdminSchema  = new mongoose.Schema({
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
        default:4
    },
    fullname: {
        type: String,
        maxlength: 20
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
    district: {
        type: String,
    },
    state: {
        type: String
    }

})


const RegionalAdmin = mongoose.model('RegionalAdmin',regionalAdminSchema)

module.exports = {RegionalAdmin}