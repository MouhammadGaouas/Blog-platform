const express = require('express');
const cors = require('cors')

const app = express();
app.use(cors())



app.post('/upload' , (req , res) => {

})

app.listen(5000, () => console.log('Server running on http://localhost:5000'));
