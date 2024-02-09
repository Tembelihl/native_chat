const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const passport = require("passport");
const LocalStrategy = require("passport-local").Strategy;

const app = express();
const port = 8002;
const cors = require("cors");
app.use(cors());

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(passport.initialize());
const jwt = require("jsonwebtoken");

mongoose
  .connect(
    "mongodb+srv://tembelihle:tembelihle32@cluster0.dooaoqq.mongodb.net/",
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    }
  )

  .then(() => {
    console.log("Connect to Mongo Db");
  })
  .catch((err) => {
    console.log("Error connecting to MongoDb", err);
  });

app.listen(port, () => {
  console.log("Server running on port 8002");
});

const User = require("./models/user");
const Message = require("./models/message");

//endpoint for registering the user

app.post("/register", (req, res) => {
  const { name, email, password, image } = req.body;

  //create a new user
  const newUser = new User({ name, email, password, image });

  //save the user to the database
  newUser
    .save()
    .then(() => {
      res.status(200).json({ message: "User registered succesfully!" });
    })
    .catch((err) => {
      console.log("Error registering user!", err);
      res.status(500).json({ message: "Error registering the user!" });
    });
});
