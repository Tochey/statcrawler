const router = require("express").Router();
const bcrypt = require("bcrypt");
const jwt = require('jsonwebtoken')
const newUserModel = require("../models/users");
const { newUserValidation } = require('../models/user.validator')

router.post("/signup", async (req, res) => {
  const { firstName, lastName, password, email } = req.body
  // validate user input with joi
  const { error } = newUserValidation(req.body);
  if (error) return res.status(400).send({ message: error.details[0].message });

  //check if email already exists
  const user = await newUserModel.findOne({ email: email })
  if (user)
    return res.status(409).send({ message: "request not successful, user with email already exist" })

  //generates the hash
  const generateHash = await bcrypt.genSalt(Number(process.env.VALUE))

  //parse the generated hash into the password
  const hashPassword = await bcrypt.hash(password, generateHash)
  
  //creates a new user
  const createUser = new newUserModel({
    firstName: firstName,
    lastName: lastName,
    email: email,
    password: hashPassword,
  });

  console.log(createUser)
  try {
    const saveNewUser = await createUser.save();
    res.send(saveNewUser);
  } catch (error) {
    res.status(400).send({ message: "error trying to create new user" });
  }

});

module.exports = router;