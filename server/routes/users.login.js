const router = require("express").Router();
const jwt = require('jsonwebtoken')
const bcrypt = require("bcrypt");
const newUserModel = require("../models/users");
const { validateUserLogin } = require("../models/user.validation");

router.post("/login", async (req, res) => {

  const { error } = validateUserLogin(req.body);
  if (error) return res.status(400).send({ message: error.details[0].message });

  const user = await newUserModel.findOne({ email: req.body.email });
  //checks if the user exists
  if (!user)
    return res
      .status(401)
      .send({ message: "email or password does not exits, try again" });

  //check if the password is correct or not
  const checkPasswordValidity = await bcrypt.compare(
    req.body.password,
    user.password
  );
  if (!checkPasswordValidity)
    return res
      .status(401)
      .send({ message: "email or password does not exits, try again" });

  //create json web token
  const token = jwt.sign({_id: user._id}, process.env.TOKEN_KEY)
  res.header('json-token', token).send( token);
});

module.exports = router;