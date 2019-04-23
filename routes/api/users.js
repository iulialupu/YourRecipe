const express = require("express");
const router = express.Router();
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const config = require("config");

// User Model
const User = require("../../models/User");

// api/users/register
// Register new user
// access: public
router.post("/register", (req, res) => {
  //check if email already exists
  User.findOne({ email: req.body.email }, user => {
    if (user) {
      return res.status(400).json({ register: "This email already exists" });
    }
  });

  const newUser = new User({
    name: req.body.name,
    email: req.body.email,
    password: req.body.password
  });
  // Hash password before saving in database
  bcrypt.genSalt(10, (err, salt) => {
    bcrypt.hash(newUser.password, salt, (err, hash) => {
      if (err) throw err;
      newUser.password = hash;
      // Save new user in DB
      newUser
        .save()
        .then(user => {
          const payload = {
            id: user.id,
            name: user.name
          };
          // Create the token
          jwt.sign(
            payload,
            config.get("jwtSecret"),
            { expiresIn: 3600 },
            (err, token) => {
              if (err) throw err;
              // Send the token and user obj
              res.json({ token });
            }
          );
        })
        .catch(err => console.log(err));
    });
  });
});

// api/users/login
// Login user
// access: public
router.post("/login", (req, res) => {
  const email = req.body.email;
  const password = req.body.password;

  // Find user by email
  User.findOne({ email }).then(user => {
    // Check if user exists
    if (!user) {
      return res.status(404).json({ login: "Email not found" });
    }
    // Check password
    bcrypt.compare(password, user.password).then(isMatch => {
      if (isMatch) {
        // User matched
        // Create JWT Payload
        const payload = {
          id: user.id,
          name: user.name
        };
        // Sign token
        jwt.sign(
          payload,
          config.get("jwtSecret"),
          {
            expiresIn: 31556926 // 1 year in seconds
          },
          (err, token) => {
            if (err) throw err;
            // Send the token
            res.json({ token });
          }
        );
      } else {
        return res.status(400).json({ login: "Incorrect password" });
      }
    });
  });
});

module.exports = router;
