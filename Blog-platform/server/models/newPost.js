const mongoose = require('mongoose');

const newPostSchema = new mongoose.Schema({
    title:{
        type: String ,
        required: true
    },
    content:{
        type: String ,
        required: true
    },
    date:{
        type: Date,
        default: new Date()
    },
    likes:{
        type: Number,
        default: 0
    },
    dislikes:{
        type: Number,
        default: 0
    },
    isLiked:{
        type: Boolean,
        default: false
    }
});

module.exports = mongoose.model('Post', newPostSchema );