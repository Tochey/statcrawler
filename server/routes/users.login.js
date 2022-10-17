const router = require("express").Router();
const jwt = require('jsonwebtoken')
const bcrypt = require("bcrypt");
const newUserModel = require("../models/users");
const { userLoginValidation, } = require('../models/user.validator');
const {generateAccessToken} = require("../utilities/tokenGeneration");
const { generateRefreshToken } = require('../utilities/tokenGeneration');
const client = require("../config/redis.config");
const emailToken = require('../models/token');
const sendEmail = require("../utilities/email/emailService");
const crypto = require("crypto");


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

  if (!user.verified){
    let token = await emailToken.findOne({userId: user._id});

    if(!token){
      token = await new emailToken({
        userId: user._id,
        token: crypto.randomBytes(32).toString("hex"),
      }).save();

      // generates the email url for the user
    const emailUrl = `${process.env.BASE_URL}/api/v1/user/${user._id}/token/${token.token}`
    await sendEmail(user.email, "hello, welcome. Kindly verify email", emailUrl); // email body
    }
    
  }else{
    return res.status(400).send({message: "an email has been sent to this account already for verification"})
  }


  //create json web token if authenticated and send it back to client in header where it is stored in localStorage ( might not be best practice )
  const accessToken = generateAccessToken(user._id, user.email)
  const refreshToken = generateRefreshToken(user._id, user.email)
  client.set(`${user.email}`, refreshToken)

  res.header('Authorization', accessToken).send({accessToken : accessToken, refreshToken : refreshToken})
});

module.exports = router;