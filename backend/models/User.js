const mongoose = require("mongoose")
const { Schema } = mongoose;
const UserSchema = new Schema({
    name: {
        type: String,
        require: true
    },
    email: {
        type: String,
        require: true,
        unique: true
    },
    password: {
        type: String,
        require: true
    },
    date: {
        type: Date,
        default: new Date()
    },
    verifytoken:String
})

module.exports = mongoose.model("user", UserSchema);