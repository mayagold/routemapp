////////////////////////////////////////////////
//    MODELS, DEPENDENCIES
////////////////////////////////////////////////

const express     = require('express');
const app         = express();
const bodyParser  = require('body-parser');
const mongoose    = require('mongoose');
const session        = require('express-session');
require('dotenv').config();

const port = process.env.PORT || 3000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:false}));
app.use(express.static('public'));
app.use(session({
          secret: process.env.SECRET || "Motorcycle Routes",
          resave: false,
          saveUninitialized: false
}));

////////////////////////////////////////////////
//    REQUIRE SEED CONTROLLER
////////////////////////////////////////////////

const seedController = require('./controllers/seedController.js');
app.use('/seed', seedController);

////////////////////////////////////////////////
//    REQUIRE ROUTE CONTROLLER
////////////////////////////////////////////////

var routeController = require('./controllers/routeController.js');
app.use('/routes', routeController);

////////////////////////////////////////////////
//    REQUIRE SEESSION CONTROLLER
////////////////////////////////////////////////

const sessionController = require('./controllers/session.js');
app.use('/session', sessionController);

////////////////////////////////////////////////
//    HELLO WORLD
////////////////////////////////////////////////

// app.get('/', function(req,res){
//   res.send('Working!');
// })

////////////////////////////////////////////////
//    MONGO DB
////////////////////////////////////////////////

mongoose.connect(process.env.MONGODB_URI ||  'mongodb://localhost:27017/route_app');
mongoose.connection.once('open', function() {
  console.log('connected to mongo');
  console.log('-----------------------');
})

////////////////////////////////////////////////
//    Listening
////////////////////////////////////////////////

app.listen(port, function(){
  console.log('-----------------------');
  console.log('Listening on port ' + port);
  console.log('-----------------------');
})
