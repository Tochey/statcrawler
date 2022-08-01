const router = require("express").Router();
const bcrypt = require("bcrypt");
const newUserModel = require("../models/users");
// const { validateNewUser } = require("../models/user.validation");

router.post("/signup", async (req, res) => {

  // validate user input with joi
  // const { error } = validateNewUser(req.body);
  // if (error) return res.status(400).send({ message: error.details[0].message });

  //check if email already exists
  const user = await newUserModel.findOne({ email: req.body.email})
  if (user)
  return res.status(409).send({message: "request not successful, user with email already exist"})

    //generates the hash
    const generateHash = await bcrypt.genSalt(Number(process.env.VALUE))

    //parse the generated hash into the password
    const hashPassword = await bcrypt.hash(req.body.password, generateHash)

  //creates a new user
  const createUser = new newUserModel({
    firstName: req.body.firstName,
    lastName: req.body.lastName,
    email: req.body.email,
    password: hashPassword,
  });

  try {
    const saveNewUser = await createUser.save();
    res.send(saveNewUser);
  } catch (error) {
    res.status(400).send({ message: "error trying to create new user" });
  }


});

module.exports = router;