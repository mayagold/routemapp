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
    gpxFile: "/routes/BurbonTrail.gpx",
    description: "Scenic tour to several of the Bourbon Distillers along the Kentucky Bourbon Trail.",
    userData: {
      username: "seedRun",
      password: "$2a$10$tT8Bl0Fzu2VY1apOadUKW.br8NkDAkfhm6CelvzjTCL8GWUpbHFfC",
      Img: "Image"
    }
  },
  {
    gpxFile: "/routes/DahlonegaAmicalolaFalls.gpx",
    description: "NE Georgia Scenic route between Dahlonega to Amicalola Falls Stat Park",
    userData: {
      username: "seedRun",
      password: "$2a$10$tT8Bl0Fzu2VY1apOadUKW.br8NkDAkfhm6CelvzjTCL8GWUpbHFfC",
      Img: "Image"
    }
  },
  {
    gpxFile: "/routes/HatterasBodieLH.gpx",
    description: "NC Outer Banks route from Bodie Lighthouse to Cape Lookout Lighthouse",
    userData: {
      username: "seedRun",
      password: "$2a$10$tT8Bl0Fzu2VY1apOadUKW.br8NkDAkfhm6CelvzjTCL8GWUpbHFfC",
      Img: "Image"
    }
  },
  {
    gpxFile: "/routes/HelenGA.gpx",
    description: "Scenic tour from wester NC to NE Georgia with the bonus of a visit of the Baverian themed town of Helen GA.",
    userData: {
      username: "seedRun",
      password: "$2a$10$tT8Bl0Fzu2VY1apOadUKW.br8NkDAkfhm6CelvzjTCL8GWUpbHFfC",
      Img: "Image"
    }
  },
  {
    gpxFile: "/routes/Homestaed2KeyWest.gpx",
    description: "South Florida tour between Homestaed and Key West.",
    userData: {
      username: "seedRun",
      password: "$2a$10$tT8Bl0Fzu2VY1apOadUKW.br8NkDAkfhm6CelvzjTCL8GWUpbHFfC",
      Img: "Image"
    }
  },
  {
    gpxFile: "/routes/NorthCarolinaTransportation.gpx",
    description: "Scenic route across NC piedmont and with way points set for visiting the 'Big Chair' in Thomasville, NC -- Daniel Boones Cave in Churchland, NC and NC  Transportation Museum in Spencer, NC.",
    userData: {
      username: "seedRun",
      password: "$2a$10$tT8Bl0Fzu2VY1apOadUKW.br8NkDAkfhm6CelvzjTCL8GWUpbHFfC",
      Img: "Image"
    }
  },
  {
    gpxFile: "/routes/PioneerVillage2Arch.gpx",
    description: "Route between the Pioneer Village in Minden, NE and the Gateway to the West in St. Louis, MO. ",
    userData: {
      username: "seedRun",
      password: "$2a$10$tT8Bl0Fzu2VY1apOadUKW.br8NkDAkfhm6CelvzjTCL8GWUpbHFfC",
      Img: "Image"
    }
  },
  {
    gpxFile: "/routes/Spearfish.gpx",
    description: "Scenic route touring Spearfish Canyon and Custer SD.  A ride through the Northern Black Hills with vistas and views all along the way.",
    userData: {
      username: "seedRun",
      password: "$2a$10$tT8Bl0Fzu2VY1apOadUKW.br8NkDAkfhm6CelvzjTCL8GWUpbHFfC",
      Img: "Image"
    }
  },
  {
    gpxFile: "/routes/Waco2Austin-TX.gpx",
    description: "Scenic route touring Texas Hill country between Waco and Austin TX.",
    userData: {
      username: "seedRun",
      password: "$2a$10$tT8Bl0Fzu2VY1apOadUKW.br8NkDAkfhm6CelvzjTCL8GWUpbHFfC",
      Img: "Image"
    }
  },
  {
    gpxFile: "/routes/Wildlifeloop-Needles-Rushmore-CrazyHorse.gpx",
    description: "Scenic route in the Black Hills including Needles Highway, Mt. Rushmore and Crazy Horse Monuments. Watch out for Buffalo.",
    userData: {
      username: "seedRun",
      password: "$2a$10$tT8Bl0Fzu2VY1apOadUKW.br8NkDAkfhm6CelvzjTCL8GWUpbHFfC",
      Img: "Image"
    }
  },
  {
    gpxFile: "/routes/WoodsideLk2Rock&RollHallofFame.gpx",
    description: "Route from south of Cleveland to the Rock & Roll Hall of Fame.",
    userData: {
      username: "seedRun",
      password: "$2a$10$tT8Bl0Fzu2VY1apOadUKW.br8NkDAkfhm6CelvzjTCL8GWUpbHFfC",
      Img: "Image"
    }
  },
];

router.get('/', ( req, res) => {

  console.log("Hello from seed")
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
