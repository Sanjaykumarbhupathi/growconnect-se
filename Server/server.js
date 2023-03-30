const express = require('express');
const connectDB = require('./connect');
const app = express();
const authRoutes = require('./routes/Auth');
const contact = require('./routes/contact')
const cors = require('cors');


app.use(cors());
app.use(express.json());
connectDB();

PORT = process.env.PORT

app.use('', authRoutes);
app.use('', contact);
// app.post('/signup', (req, res) => {
//     console.log(req.body)
//     //save values to database
//     res.send(200)
// });


app.listen(5001, console.log(`Server started at 5001`));