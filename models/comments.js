const mongoose = require('mongoose');

const commentSchema = mongoose.Schema({
    comments: []
});

const Comments = mongoose.model('Comments', commentSchema);

module.exports = Comments;
