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
    },
    details: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis eget tincidunt turpis. Aenean sollicitudin sollicitudin suscipit. Morbi eu convallis libero, et ultricies massa. Nam diam justo, lobortis eget mi non, viverra ultrices justo. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Integer blandit porta purus, id mattis neque efficitur eget. Maecenas non tellus egestas ante interdum interdum nec in ligula. Nulla a ligula efficitur, viverra nibh sit amet, ultrices ipsum. Fusce placerat, ex iaculis fringilla vulputate, risus nulla ultrices eros, ut malesuada lorem neque vitae justo. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Pellentesque vitae odio quis orci commodo cursus. Vivamus vehicula diam ac leo elementumbibendum. Integer sollicitudin sagittis fringilla. Suspendisse in purus lorem."
  },
  {
    gpxFile: "/routes/DahlonegaAmicalolaFalls.gpx",
    description: "NE Georgia Scenic route between Dahlonega to Amicalola Falls State Park",
    userData: {
      username: "seedRun",
      password: "$2a$10$tT8Bl0Fzu2VY1apOadUKW.br8NkDAkfhm6CelvzjTCL8GWUpbHFfC",
      Img: "Image"
    },
    details: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis eget tincidunt turpis. Aenean sollicitudin sollicitudin suscipit. Morbi eu convallis libero, et ultricies massa. Nam diam justo, lobortis eget mi non, viverra ultrices justo. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Integer blandit porta purus, id mattis neque efficitur eget. Maecenas non tellus egestas ante interdum interdum nec in ligula. Nulla a ligula efficitur, viverra nibh sit amet, ultrices ipsum. Fusce placerat, ex iaculis fringilla vulputate, risus nulla ultrices eros, ut malesuada lorem neque vitae justo. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Pellentesque vitae odio quis orci commodo cursus. Vivamus vehicula diam ac leo elementumbibendum. Integer sollicitudin sagittis fringilla. Suspendisse in purus lorem."
  },
  {
    gpxFile: "/routes/HatterasBodieLH.gpx",
    description: "NC Outer Banks route from Bodie Lighthouse to Cape Lookout Lighthouse",
    userData: {
      username: "seedRun",
      password: "$2a$10$tT8Bl0Fzu2VY1apOadUKW.br8NkDAkfhm6CelvzjTCL8GWUpbHFfC",
      Img: "Image"
    },
    details: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis eget tincidunt turpis. Aenean sollicitudin sollicitudin suscipit. Morbi eu convallis libero, et ultricies massa. Nam diam justo, lobortis eget mi non, viverra ultrices justo. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Integer blandit porta purus, id mattis neque efficitur eget. Maecenas non tellus egestas ante interdum interdum nec in ligula. Nulla a ligula efficitur, viverra nibh sit amet, ultrices ipsum. Fusce placerat, ex iaculis fringilla vulputate, risus nulla ultrices eros, ut malesuada lorem neque vitae justo. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Pellentesque vitae odio quis orci commodo cursus. Vivamus vehicula diam ac leo elementumbibendum. Integer sollicitudin sagittis fringilla. Suspendisse in purus lorem."
  },
  {
    gpxFile: "/routes/HelenGA.gpx",
    description: "Scenic tour from western NC to NE Georgia with the bonus of a visit of the Bavarian themed town of Helen GA.",
    userData: {
      username: "seedRun",
      password: "$2a$10$tT8Bl0Fzu2VY1apOadUKW.br8NkDAkfhm6CelvzjTCL8GWUpbHFfC",
      Img: "Image"
    },
    details: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis eget tincidunt turpis. Aenean sollicitudin sollicitudin suscipit. Morbi eu convallis libero, et ultricies massa. Nam diam justo, lobortis eget mi non, viverra ultrices justo. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Integer blandit porta purus, id mattis neque efficitur eget. Maecenas non tellus egestas ante interdum interdum nec in ligula. Nulla a ligula efficitur, viverra nibh sit amet, ultrices ipsum. Fusce placerat, ex iaculis fringilla vulputate, risus nulla ultrices eros, ut malesuada lorem neque vitae justo. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Pellentesque vitae odio quis orci commodo cursus. Vivamus vehicula diam ac leo elementumbibendum. Integer sollicitudin sagittis fringilla. Suspendisse in purus lorem."
  },
  {
    gpxFile: "/routes/Homestaed2KeyWest.gpx",
    description: "South Florida tour between Homested and Key West.",
    userData: {
      username: "seedRun",
      password: "$2a$10$tT8Bl0Fzu2VY1apOadUKW.br8NkDAkfhm6CelvzjTCL8GWUpbHFfC",
      Img: "Image"
    },
    details: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis eget tincidunt turpis. Aenean sollicitudin sollicitudin suscipit. Morbi eu convallis libero, et ultricies massa. Nam diam justo, lobortis eget mi non, viverra ultrices justo. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Integer blandit porta purus, id mattis neque efficitur eget. Maecenas non tellus egestas ante interdum interdum nec in ligula. Nulla a ligula efficitur, viverra nibh sit amet, ultrices ipsum. Fusce placerat, ex iaculis fringilla vulputate, risus nulla ultrices eros, ut malesuada lorem neque vitae justo. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Pellentesque vitae odio quis orci commodo cursus. Vivamus vehicula diam ac leo elementumbibendum. Integer sollicitudin sagittis fringilla. Suspendisse in purus lorem."
  },
  {
    gpxFile: "/routes/NorthCarolinaTransportation.gpx",
    description: "Scenic route across NC piedmont and with way points set for visiting the 'Big Chair' in Thomasville, NC -- Daniel Boones Cave in Churchland, NC and NC  Transportation Museum in Spencer, NC.",
    userData: {
      username: "seedRun",
      password: "$2a$10$tT8Bl0Fzu2VY1apOadUKW.br8NkDAkfhm6CelvzjTCL8GWUpbHFfC",
      Img: "Image"
    },
    details: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis eget tincidunt turpis. Aenean sollicitudin sollicitudin suscipit. Morbi eu convallis libero, et ultricies massa. Nam diam justo, lobortis eget mi non, viverra ultrices justo. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Integer blandit porta purus, id mattis neque efficitur eget. Maecenas non tellus egestas ante interdum interdum nec in ligula. Nulla a ligula efficitur, viverra nibh sit amet, ultrices ipsum. Fusce placerat, ex iaculis fringilla vulputate, risus nulla ultrices eros, ut malesuada lorem neque vitae justo. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Pellentesque vitae odio quis orci commodo cursus. Vivamus vehicula diam ac leo elementumbibendum. Integer sollicitudin sagittis fringilla. Suspendisse in purus lorem."
  },
  {
    gpxFile: "/routes/PioneerVillage2Arch.gpx",
    description: "Route between the Pioneer Village in Minden, NE and the Gateway to the West in St. Louis, MO. ",
    userData: {
      username: "seedRun",
      password: "$2a$10$tT8Bl0Fzu2VY1apOadUKW.br8NkDAkfhm6CelvzjTCL8GWUpbHFfC",
      Img: "Image"
    },
    details: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis eget tincidunt turpis. Aenean sollicitudin sollicitudin suscipit. Morbi eu convallis libero, et ultricies massa. Nam diam justo, lobortis eget mi non, viverra ultrices justo. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Integer blandit porta purus, id mattis neque efficitur eget. Maecenas non tellus egestas ante interdum interdum nec in ligula. Nulla a ligula efficitur, viverra nibh sit amet, ultrices ipsum. Fusce placerat, ex iaculis fringilla vulputate, risus nulla ultrices eros, ut malesuada lorem neque vitae justo. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Pellentesque vitae odio quis orci commodo cursus. Vivamus vehicula diam ac leo elementumbibendum. Integer sollicitudin sagittis fringilla. Suspendisse in purus lorem."
  },
  {
    gpxFile: "/routes/Spearfish.gpx",
    description: "Scenic route touring Spearfish Canyon and Custer SD.  A ride through the Northern Black Hills with vistas and views all along the way.",
    userData: {
      username: "seedRun",
      password: "$2a$10$tT8Bl0Fzu2VY1apOadUKW.br8NkDAkfhm6CelvzjTCL8GWUpbHFfC",
      Img: "Image"
    },
    details: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis eget tincidunt turpis. Aenean sollicitudin sollicitudin suscipit. Morbi eu convallis libero, et ultricies massa. Nam diam justo, lobortis eget mi non, viverra ultrices justo. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Integer blandit porta purus, id mattis neque efficitur eget. Maecenas non tellus egestas ante interdum interdum nec in ligula. Nulla a ligula efficitur, viverra nibh sit amet, ultrices ipsum. Fusce placerat, ex iaculis fringilla vulputate, risus nulla ultrices eros, ut malesuada lorem neque vitae justo. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Pellentesque vitae odio quis orci commodo cursus. Vivamus vehicula diam ac leo elementumbibendum. Integer sollicitudin sagittis fringilla. Suspendisse in purus lorem."
  },
  {
    gpxFile: "/routes/Waco2Austin-TX.gpx",
    description: "Scenic route touring Texas Hill country between Waco and Austin TX.",
    userData: {
      username: "seedRun",
      password: "$2a$10$tT8Bl0Fzu2VY1apOadUKW.br8NkDAkfhm6CelvzjTCL8GWUpbHFfC",
      Img: "Image"
    },
    details: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis eget tincidunt turpis. Aenean sollicitudin sollicitudin suscipit. Morbi eu convallis libero, et ultricies massa. Nam diam justo, lobortis eget mi non, viverra ultrices justo. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Integer blandit porta purus, id mattis neque efficitur eget. Maecenas non tellus egestas ante interdum interdum nec in ligula. Nulla a ligula efficitur, viverra nibh sit amet, ultrices ipsum. Fusce placerat, ex iaculis fringilla vulputate, risus nulla ultrices eros, ut malesuada lorem neque vitae justo. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Pellentesque vitae odio quis orci commodo cursus. Vivamus vehicula diam ac leo elementumbibendum. Integer sollicitudin sagittis fringilla. Suspendisse in purus lorem."
  },
  {
    gpxFile: "/routes/Wildlifeloop-Needles-Rushmore-CrazyHorse.gpx",
    description: "Scenic route in the Black Hills including Needles Highway, Mt. Rushmore and Crazy Horse Monuments. Watch out for Buffalo.",
    userData: {
      username: "seedRun",
      password: "$2a$10$tT8Bl0Fzu2VY1apOadUKW.br8NkDAkfhm6CelvzjTCL8GWUpbHFfC",
      Img: "Image"
    },
    details: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis eget tincidunt turpis. Aenean sollicitudin sollicitudin suscipit. Morbi eu convallis libero, et ultricies massa. Nam diam justo, lobortis eget mi non, viverra ultrices justo. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Integer blandit porta purus, id mattis neque efficitur eget. Maecenas non tellus egestas ante interdum interdum nec in ligula. Nulla a ligula efficitur, viverra nibh sit amet, ultrices ipsum. Fusce placerat, ex iaculis fringilla vulputate, risus nulla ultrices eros, ut malesuada lorem neque vitae justo. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Pellentesque vitae odio quis orci commodo cursus. Vivamus vehicula diam ac leo elementumbibendum. Integer sollicitudin sagittis fringilla. Suspendisse in purus lorem."
  },
  {
    gpxFile: "/routes/WoodsideLk2Rock&RollHallofFame.gpx",
    description: "Route from south of Cleveland to the Rock & Roll Hall of Fame.",
    userData: {
      username: "seedRun",
      password: "$2a$10$tT8Bl0Fzu2VY1apOadUKW.br8NkDAkfhm6CelvzjTCL8GWUpbHFfC",
      Img: "Image"
    },
    details: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis eget tincidunt turpis. Aenean sollicitudin sollicitudin suscipit. Morbi eu convallis libero, et ultricies massa. Nam diam justo, lobortis eget mi non, viverra ultrices justo. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Integer blandit porta purus, id mattis neque efficitur eget. Maecenas non tellus egestas ante interdum interdum nec in ligula. Nulla a ligula efficitur, viverra nibh sit amet, ultrices ipsum. Fusce placerat, ex iaculis fringilla vulputate, risus nulla ultrices eros, ut malesuada lorem neque vitae justo. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Pellentesque vitae odio quis orci commodo cursus. Vivamus vehicula diam ac leo elementumbibendum. Integer sollicitudin sagittis fringilla. Suspendisse in purus lorem."
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
