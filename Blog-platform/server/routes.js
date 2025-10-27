const express = require('express');
const createNewPost = require('./Controller')

const routes = express.Router();


routes.post('/api/newPost' , createNewPost);

module.exports = routes ;