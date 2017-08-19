const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
    userName: String,
    password: String
});

const Users = mongoose.model('User', userSchema);

module.exports = Users; 
