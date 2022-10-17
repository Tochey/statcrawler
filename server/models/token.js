const mongoose = require("mongoose")
const Schema = mongoose.Schema;

// creates a new token for the email auth
const tokenSchema = new Schema({
    userId: {
        type: Schema.Types.ObjectId,
        required: true,
        ref: "user",
        unique: true
    },
    token: {
        type: String,
        required: true
    },
    createdAt: {
        type: Date,
        default: Date.now(),
        expires: 3600 // expires in 1 hour
    }
})

module.exports = mongoose.model("token", tokenSchema);