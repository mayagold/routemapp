const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
    username: {type: String, required: true, unique: true},
    password: {type: String, required: true},
    img: {type: String}
});

const Users = mongoose.model('User', userSchema);

module.exports = Users;
