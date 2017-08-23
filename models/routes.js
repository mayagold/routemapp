const mongoose = require('mongoose');
const Users = require('./users.js');
const Comments = require('./comments.js')

const routeSchema = mongoose.Schema({
    gpxFile: String,
    description: String,
    userData: [Users.schema],
});

const Routes = mongoose.model('Route', routeSchema);

module.exports = Routes;
