const express = require("express");
const Router = express.Router();
const user = require("../database");
const bcrypt = require("bcryptjs");
const cookieparser =require("cookie-parser");
const auth =require("../authorization");
const jwt =require("jsonwebtoken");


// this is user registration page
Router.post("/register", async (req, res) => {
  try {
    const data = new user(req.body);
    if (data.password === data.conformPassword) {
      const emailvalidation = await user.findOne({ email: data.email });
      if (emailvalidation) {
        return res.status(409).json({ message: 'Username already exists' });
      }

      const token = await data.generateToken();
      console.log("this token is user" + token);

      res.cookie("jwt",token);

      const savedata = await data.save();
      res.status(201).json({ message: 'User registered successfully' });
    } else {
      res.status(400).send("this is not right pls fill correct detail");
    }
  } catch (error) {
      // Check if the error is due to a duplicate key (phone) conflict
      if (error.code === 11000 && error.keyPattern && error.keyPattern.phone === 1) {
        res.status(409).json({ message: 'Phone number is already registered' });
      } else {
        res.status(400).send(error);
      }
  }
});


//user login route /page
Router.post("/login", async (req, res) => {
  try {
    console.log("login page");
    const passworduser = req.body.password;
    const checkemail = req.body.email;
    const databasedata = await user.findOne({ email: checkemail });
    if (!databasedata) {
      return res.status(401).json({ message: 'Invalid credentials, user is not found' });
    }
    const ismatch = await bcrypt.compare(passworduser, databasedata.password);
    console.log("login page" + ismatch);
    if (ismatch) {
      const token = await databasedata.generateToken();
      // res.cookie("jwt", token);
      // Return the user data along with the token
      return res.status(200).json({ message: 'Login successful!', token , user: checkemail });
    } else {
      return res.status(401).json({ message: 'Invalid credentials' });
    }
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
});


// user logout route


Router.get('/logout', auth, async (req, res) => {
  try {
    req.user.tokens = [];
    res.clearCookie('jwt');
    await req.user.save();
    res.status(201).json({ message: 'User Logout successfully' });
  } catch (error) {
    res.status(500).send(error);
  }
});

// export router for import in express app
module.exports = Router;
