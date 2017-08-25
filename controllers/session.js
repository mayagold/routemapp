const express = require('express');
const router  = express.Router();
const User    = require('../models/users.js');
const bcrypt  = require('bcrypt');


// Try to create a post route at the address /login
// that will accept data from the login form
router.post('/login', (req, res) => {
// query the dateabase for the user
  User.findOne({username: req.body.username}, (err, user) => {
    console.log(user);
    // if the user exists use the bcrypt compare passwords
    if(user){
      if(bcrypt.compareSync(req.body.password, user.password)){
        req.session.message = '';
        req.session.username = req.body.username;
        req.session.logged = true;
        res.json(req.session.logged);
        }
    } else {
        req.session.message = 'username or password are incorrect';
        res.json(req.session.message);
        // this will cause a refresh, alternative is to res.send json with logic message
      }
    })
})

router.post('/registration', (req, res) => {
  const password = req.body.password;
  const passwordHash = bcrypt.hashSync(password, bcrypt.genSaltSync(10));
  // create on object for are db entry
  const userDbEntry = {};
  userDbEntry.username = req.body.username;
  userDbEntry.password = passwordHash;
  User.create(userDbEntry, (err, user) => {
    // set up session
    req.session.message  = '';
    req.session.username = user.username;
    req.session.logged   = true;
    res.json(user)
  });
});

//;logout
router.get('/logout', (req, res) => {
  req.session.destroy((err) => {
    if(err){
      //do something
    } else {
      res.send("LOGGED OUT!!");
    }
  })
})

// export the controller
module.exports = router;
