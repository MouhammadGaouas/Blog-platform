const express = require('express');
const {createNewPost , getallPosts} = require('./Controller')

const routes = express.Router();


routes.post('/api/createNewPost' , createNewPost);
routes.get('/api/getNewPost' , getallPosts);

module.exports = routes ;