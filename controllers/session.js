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
        console.log(req.session.username, '------------------------ req.session.username');
        res.json(req.session.logged);
      // } else {
        //   // create a message for the user
        //   req.session.message = 'username or password are incorrect';
        //   res.redirect('/')
        //   // send json instead so user doesn't have refreshed page.
        //
        //
        }
    } else {
        req.session.message = 'username or password are incorrect';
        res.json(req.session.message);
        // this will cause a refresh, alternative is to res.send json with logic message
      }
    })
})

router.post('/registration', (req, res) => {
  console.log('==========================================================');
  // check for unique username
  // User.findOne({username: req.body.username}, (err, user) => {
   // if the user exists use the bcrypt compare passwords

    //  if(user){
    //    req.session.message = 'username must be unique that username exists';
    //    res.json(req.session.message);
    //    console.log(req.body.password);
     //
    //    // -- will need logic in the .then statement in app.js to make this appear
    //  } else if
    //   (req.body.password.match(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z]{8,}$/) === null) {
    //     req.session.message = 'password not 8 characters and at lest 1 Upper and at lest 1 lower 1 and non-alphanumerics';
    //     res.json(req.session.message);
    //  } else {
         // hash the password
          const password = req.body.password;
          console.log('******************************************** before bcrypt **********************');
          const passwordHash = bcrypt.hashSync(password, bcrypt.genSaltSync(10));

          // create on object for are db entry
          const userDbEntry = {};
          userDbEntry.username = req.body.username;
          userDbEntry.password = passwordHash;
          console.log('--------------------', 'this is before db create');
          console.log(userDbEntry);
          User.create(userDbEntry, (err, user) => {
            console.log('----------this is the user----------', user);

            // set up session
            req.session.message  = '';
            req.session.username = user.username;
            req.session.logged   = true;
            console.log('hit redirect');
            res.json(user)
          });
      //  }
  // });
});



//;logout
router.get('/logout', (req, res) => {
  req.session.destroy((err) => {
    if(err){
      //do something
    } else {
      console.log('Logged Out')
      res.send("LOGGED OUT!!");
      // res.redirect('/');
    }

  })
})



// some route we want to check if someone is logged in
// router.get('/someRouteWeDontWannaSeeUnlessLoggedIn', (req, res) => {

//   if(req.session.logged){
//     // run the normal code that was there
//     // to show page
//   } else {
//     // redirect them to login
//     redirect('/sessions/login')
//   }


// })














// export the controller
module.exports = router;
