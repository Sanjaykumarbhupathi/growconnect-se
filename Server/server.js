const express = require('express');
const connectDB = require('./connect');

const app = express();

app.use(express.json());
connectDB();

PORT = process.env.PORT

app.post('/signup', (req, res) => {
    console.log(req.body)
    //save values to database
    res.send(200)
});


app.listen(5001, console.log(`Server started at 5001`));