const express = require('express')
const newPostSchema = require('./models/newPost')

const createNewPost = async (req , res) => {
    try{
        const post = req.body ;
        const newPost = new newPostSchema(post);
        await newPost.save();

        res.json({message: 'Post saved successfully '});
    }catch(err){
        res.json({message: "Failed to create post",err});
    }
}

module.exports = createNewPost ;