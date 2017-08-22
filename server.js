////////////////////////////////////////////////
//    MODELS, DEPENDENCIES
////////////////////////////////////////////////

const express     = require('express');
const app         = express();
const bodyParser  = require('body-parser');
const mongoose    = require('mongoose');
const session        = require('express-session');
require('dotenv').config()

const port = 3000 || process.env.PORT;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:false}));
app.use(express.static('public'));
app.use(session({
          secret: process.env.SECRET,
          resave: false,
          saveUninitialized: false
}));

////////////////////////////////////////////////
//    REQUIRE SEED CONTROLLER
//    (and eventually the route model controller)
////////////////////////////////////////////////
const seedController = require('./controllers/seedController.js');
app.use('/seed', seedController);

////////////////////////////////////////////////
//    REQUIRE ROUTE CONTROLLER
////////////////////////////////////////////////
var routeController = require('./controllers/routeController.js');
app.use('/routes', routeController);
//    REQUIRE SEESSION CONTROLLER
//    (and eventually the route model controller)
////////////////////////////////////////////////
const sessionController = require('./controllers/session.js');
app.use('/session', sessionController);


////////////////////////////////////////////////
//    REQUIRE SESSION CONTROLLER
//    (and eventually the route model controller)
////////////////////////////////////////////////


////////////////////////////////////////////////
//    HELLO WORLD
////////////////////////////////////////////////

app.get('/', function(req,res){
  res.send('Working!');
})

////////////////////////////////////////////////
//    MONGO DB
////////////////////////////////////////////////

mongoose.connect('mongodb://localhost/route_app');
mongoose.connection.once('open', function(){
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
