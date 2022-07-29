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
  },
  { collection: "users" }
);

module.exports = mongoose.model('users', newUserSchema)



// // method generates auth token from jwt key
// newUserSchema.methods.generateAuthToken = function () {
//   const newUserToken = jwt.sign({ _id: this._id }, process.env.KEY, {
//     expiresIn: "24h",
//   });
//   return newUserToken;
// };

// //user model
// const newUserModel = mongoose.model("user", newUserSchema);

// //joi validator
// const validateUser = (data) => {
//   const jason = Joi.object({
//     firstName: {
//       type: String,
//       required: true,
//       label: "firstName",
//     },
//     lastName: {
//       type: String,
//       required: true,
//       label: "lastName",
//     },
//     email: {
//       required: true,
//       type: String,
//       unique: true,
//     },
//     date: {
//       type: Date,
//       default: Date.now,
//     },
//     password: passwordComplexity()
//       .min(8)
//       .trim(true)
//       .required()
//       .label("password"),
//   });
//   return jason.validateUser(data);
// };

// module.exports = { newUserModel, validateUser };



// todo: how to connect, create and save schema data to redis with node.js