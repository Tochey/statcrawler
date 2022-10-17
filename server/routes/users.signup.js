const router = require("express").Router();
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const newUserModel = require("../models/users");
const { newUserValidation } = require("../models/user.validator");
const emailToken = require("../models/token");
const sendEmail = require("../utilities/email/emailService");
const crypto = require("crypto");

router.post("/signup", async (req, res) => {
  // await sendEmail('davidhero125@gmail.com', "hello, welcome. Kindly verify email", 'Testing');
  // return res.json({
  //   message: process.env.HOST,
  //   ere: process.env.PORT
  // })

  const { firstName, lastName, password, email } = req.body;
  // validate user input with joi
  const { error } = newUserValidation(req.body);
  if (error) return res.status(400).send({ message: error.details[0].message });

  //check if email already exists
  let user = await newUserModel.findOne({ email: email });
//  console.log(user);
  if (user) {
    return res.status(409).send({
      message: "request not successful, user with email already exist",
    });
  }

  //generates the hash
  const generateHash = await bcrypt.genSalt(Number(process.env.VALUE));

  //parse the generated hash into the password
  const hashPassword = await bcrypt.hash(password, generateHash);

  //creates a new user
  const createUser = new newUserModel({
    firstName: firstName,
    lastName: lastName,
    email: email,
    password: hashPassword,
  });
  console.log("user has been created");

  try {
    const saveNewUser = await createUser.save();
    console.log("new user saved", saveNewUser);

    // generates the token per the userId
    const token = await new emailToken({
      userId: saveNewUser?._id,
      token: crypto.randomBytes(32).toString("hex"),
    }).save();

    // generates the email url for the user
    const emailUrl = `${process.env.BASE_URL}/api/v1/user/${saveNewUser._id}/token/${token.token}`;

    // email body
    await sendEmail(
      saveNewUser.email,
      "hello, welcome. Kindly verify email",
      emailUrl
    );
    res.status(201).send({
      message: "email has been sent to complete signup, please verify",
    });
    
    // res.send(saveNewUser);
  } catch (error) {
    console.log("error creating a new user " + error);
    res
      .status(400)
      .send({ message: "new user error details:" + error });
  }
});

router.get("/:id/token/:token", async (req, res) => {
  try {
    let user = await newUserModel.findOne({ _id: req.params.id });
    if (!user) {
      return res.status(400).send({ message: "invalid auth link" });
    } else {
      const token = await emailToken.findOne({
        userId: user._id,
        token: req.params.token,
      });
    }

    if (!token) {
      return res
        .status(400)
        .send({ message: "token has expired/ invalid token" });
    } else {
      await newUserModel.updateOne({ _id: user._id, verified: true });
      await token.remove();

      res.status(200).send({ message: "email has been verified successfully" });
    }
  } catch (error) {
    res.status(400).send({ message: "an error occurred during verification" });
  }
});

module.exports = router;
