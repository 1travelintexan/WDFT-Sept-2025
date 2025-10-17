const router = require("express").Router();
const UserModel = require("../models/User.model");
const bcryptjs = require("bcryptjs");
const jwt = require("jsonwebtoken");
const { isAuthenticated } = require("../middlewares/jwt.middleware");
//signup route to create a new user
router.post("/signup", async (req, res) => {
  try {
    // const { username, email, password} = req.body
    //first check if the email is already taken
    const foundUser = await UserModel.findOne({ email: req.body.email });
    console.log("was the user found", foundUser);
    if (foundUser) {
      //we dont create the user but send an error message back
      res.status(403).json({ errorMessage: "Invalid Credentials" });
    } else {
      //there is no email already, so we create the user
      //create a salt
      const theSalt = bcryptjs.genSaltSync(12);
      //hash the password
      const hashedPassword = bcryptjs.hashSync(req.body.password, theSalt);
      //create a new user without the original password
      const hashedUser = {
        ...req.body,
        password: hashedPassword,
      };

      const newlyAddedUser = await UserModel.create(hashedUser);
      console.log("you created a user, nice work", newlyAddedUser);
      res.status(201).json(newlyAddedUser);
    }
  } catch (error) {
    console.log(error);
    res.status(500).json(error);
  }
});

// login route to find an exisiting user and check the password
router.post("/login", async (req, res) => {
  try {
    // try to find the user based on the email that they sent
    const foundUser = await UserModel.findOne({ email: req.body.email });
    // if there is no user with the email sent
    if (!foundUser) {
      res.status(403).json({ errorMessage: "Invalid Credentials" });
    } else {
      //if there is a user with that email, then we compare the passwords
      const doesPasswordsMatch = bcryptjs.compareSync(
        req.body.password,
        foundUser.password
      );
      console.log("does the password match?", doesPasswordsMatch);
      if (doesPasswordsMatch === true) {
        //if the email was found and the password matched, then they are logged in with a token
        const theDataInsideTheToken = { _id: foundUser._id };
        const authToken = jwt.sign(
          theDataInsideTheToken,
          process.env.TOKEN_SECRET,
          { algorithm: "HS256", expiresIn: "6h" }
        );
        res.status(200).json({
          message: "you are now logged in for 6 hours",
          authToken: authToken,
        });
      } else {
        //the email was found but the password was incorrect
        res.status(403).json({ errorMessage: "Invalid Credentials" });
      }
    }
  } catch (error) {
    console.log(error);
    res.status(500).json(error);
  }
});
// verify route that checks the authToken with a middleware
router.get("/verify", isAuthenticated, async (req, res) => {
  res.status(200).json({
    message: "your token is verified! Nice work",
    currentUser: req.payload,
  });
});
module.exports = router;
