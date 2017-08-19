////////////////////////////////////////////////
//    SEED CONTROLLER SETUP
////////////////////////////////////////////////
const express = require('express');
const router = express.Router();

////////////////////////////////////////////////
//   MODEL SCHEMA
////////////////////////////////////////////////
const Routes = require('../models/routes.js'); 

////////////////////////////////////////////////
//   SEED DATA
////////////////////////////////////////////////
const newRoutes=[
  {
    gpxFile: "../routes/'Burbon Trail'.gpx",
    comments: "Scenic tour to several of the Burbon Distillers.",
    userData: ["seedRun"]
  },
  {
    gpxFile: "../routes/'Dahlonega to Amicalola Falls State Park'.gpx",
    comments: "NE Georgia Scenic route between Dahlonega to Amicalola Falls Stat Park",
    userData: ["seedRun"]
  },
  {
    gpxFile: "../routes/'Hatteras LH - Bodie LH'.gpx",
    comments: "NC Outer Banks route from Bodie Lighthouse to Cape Lookout Lighthouse",
    userData: ["seedRun"]
  },
  {
    gpxFile: "../routes/'Helen Loop'.gpx",
    comments: "Scenic tour from wester NC to NE Georgia with the bonus of a visit of the Baverian themed town of Helen GA.",
    userData: ["seedRun"]
  },
  {
    gpxFile: "../routes/'Homestaed to KeyWest'.gpx",
    comments: "South Florida tour between Homestaed and Key West.",
    userData: ["seedRun"]
  },
  {
    gpxFile: "../routes/NorthCarolinaTransportation.gpx",
    comments: "Scenic route across NC piedmont and with way points set for visiting the 'Big Chair' in Thomasville, NC -- Daniel Boones Cave in Churchland, NC and NC  Transportation Museum in Spencer, NC.",
    userData: ["seedRun"]
  },
  {
    gpxFile: "../routes/'Pioneer Village to Casino Queen RV'.gpx",
    comments: "Route between the Pioneer Village in Minden, NE and the Gateway to the West in St. Louis, MO. ",
    userData: ["seedRun"]
  },
  {
    gpxFile: "../routes/Spearfish.gpx",
    comments: "Scenic route touring Spearfish Canyon and Custer SD.  A ride through the Northern Black Hills with vistas and views all along the way.",
    userData: ["seedRun"]
  },
];

router.get('/', ( req, res) => {
	Routes.create(newRoutes, function(err) {
		if (err) {
			console.log(err);
			res.send('Error seeding database');
		} else {
			console.log('SEED EXECUTED');
			res.redirect('/');
		}
	});
});

router.get( '/dropdatabase' , (req , res ) => {
 Routes.collection.drop();
 res.send ('You did it! You dropped the database!');
});

module.exports = router;
