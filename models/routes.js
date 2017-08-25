const mongoose = require('mongoose');
const Users = require('./users.js');


const routeSchema = mongoose.Schema({
    gpxFile: String,
    description: String,
    userData: [Users.schema],
    details: String,
});

const Routes = mongoose.model('Route', routeSchema);

module.exports = Routes;
