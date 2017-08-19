////////////////////////////////////////////////
//    MODELS, DEPENDENCIES
////////////////////////////////////////////////

const express     = require('express');
const app         = express();
const bodyParser  = require('body-parser');
const mongoose    = require('mongoose');
const port        = 3000 || process.env.PORT;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:false}));
app.use(express.static('public'));

////////////////////////////////////////////////
//    REQUIRE SEED CONTROLLER
//    (and eventually the route model controller)
////////////////////////////////////////////////
var seedController = require('./controllers/seedController.js');
app.use('/seed', seedController);

////////////////////////////////////////////////
//    REQUIRE ROUTE CONTROLLER
////////////////////////////////////////////////
var routeController = require('./controllers/routeController.js');
app.use('/routes', routeController);


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
