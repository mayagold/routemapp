const express = require('express');
const Routes = require('../models/routes.js');
const Users = require('../models/users.js');
const router = express.Router();

router.get('/', (req, res)=>{
  console.log(req.session, ' this is req.session in the the route /routes')
	Routes.find({}, (err, foundRoutes)=>{
		res.render('/', {
			routes: foundRoutes
		});
	});
});

module.exports = router;
