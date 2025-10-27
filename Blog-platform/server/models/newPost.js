const mongoose = require('mongoose');

const newPostSchema = new mongoose.Schema({
    title:{
        type: String ,
        required: true
    },
    content:{
        type: String ,
        required: true
    }
});

module.exports = mongoose.model('Post', newPostSchema );