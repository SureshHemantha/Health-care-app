const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();

const BookingRoutes = require('./routes/posts');

app.use(bodyParser.json());
app.use(cors());

app.use(BookingRoutes);


const PORT = 8000;

const DB_URL = 'mongodb+srv://new_user07:1234@healthcare.sgm5k.mongodb.net/HealthCareChanneling?retryWrites=true&w=majority';

mongoose.connect(DB_URL)

.then (() =>{
    console.log ('DB connected');
})

.catch((err) => console.log('DB connection err',err));

app.listen(PORT, () =>{
    console.log(`App is runing on ${PORT}`);
} );