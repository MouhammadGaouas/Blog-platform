const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors')
const routes = require('./routes')

const app = express();
app.use(express.json());
app.use(cors())
app.use('/' , routes )

mongoose.connect('mongodb://localhost:27017/Posts')
.then(console.log("Mongoose is connected successfully"))
.catch(err => console.log('Failed to connect to Data Base'));

app.get('/' , (req , res) => {
    console.log('Welcome from the server!')
})

app.listen(5000, () => console.log('Server running on http://localhost:5000'));
