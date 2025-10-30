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

const getallPosts = async (req , res) => {
    try{
        const post = await newPostSchema.find()
        if(post){
            return res.json({message: "Posts are finded successfully" , post})
        }   
    }catch(err){
        console.error('Failed to get posts');
    }
}


module.exports = {createNewPost , getallPosts} ;