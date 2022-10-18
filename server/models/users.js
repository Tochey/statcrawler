const mongoose = require("mongoose");
// const jwt = require("jsonwebtoken");
// const passwordComplexity = require("joi-password-complexity");

//user schema
const newUserSchema = new mongoose.Schema(
  {
    firstName: {
      type: String,
      required: true,
      label: "firstName",
    },
    lastName: {
      type: String,
      required: true,
      label: "lastName",
    },
    email: {
      required: true,
      type: String,
      unique: true,
    },
    password: {
      required: true,
      min: 8,
      type: String,
    },
    date: {
      type: Date,
      default: Date.now,
    },
    isVerified: {
      type: Boolean,
      default: false
    }
  },
  { collection: "users" }
);

module.exports = mongoose.model('users', newUserSchema)