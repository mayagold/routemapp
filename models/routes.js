const mongoose = require('mongoose');

const routeSchema = mongoose.Schema({
    gpxFile: String,
    comments: String,
    userData: []
});

const Routes = mongoose.model('Route', routeSchema);

module.exports = Routes; 
