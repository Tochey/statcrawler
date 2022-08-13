const router = require("express").Router();
const jwt = require('jsonwebtoken')
const bcrypt = require("bcrypt");
const newUserModel = require("../models/users");
const { userLoginValidation, } = require('../models/user.validator')
const auth = require('../middleware/auth')


router.post("/login", async (req, res) => {
  const { email, password } = req.body
  const { error } = userLoginValidation(req.body);
  if (error) return res.status(400).send({ message: error.details[0].message });

  const user = await newUserModel.findOne({ email: email });
  //checks if the user exists
  if (!user)
    return res
      .status(401)
      .send({ message: "email or password does not exits, try again" });

  //check if the password is correct or not
  const checkPasswordValidity = await bcrypt.compare(
    password,
    user.password
  );

  if (!checkPasswordValidity)
    return res
      .status(401)
      .send({ message: "email or password does not exits, try again" });

  //create json web token if authenticated and send it back to client in header where it is stored in localStorage ( might not be best practice )
  const token = jwt.sign({ _id: user._id, email }, process.env.TOKEN_KEY, {
    expiresIn: "2h", //refactor for the sake of developing the dashboard page
  })

  res.header('Authorization', token).send(token)
});

module.exports = router;