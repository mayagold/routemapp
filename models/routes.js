const mongoose = require('mongoose');
const Users = require('./users.js');

const routeSchema = mongoose.Schema({
    gpxFile: String,
    comments: String,
    userData: [Users.schema]
});

const Routes = mongoose.model('Route', routeSchema);

module.exports = Routes;
