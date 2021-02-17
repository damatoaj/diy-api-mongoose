const express = require('express');
const mongoose = require('mongoose');
const app = express();

//middleware
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

//mongoose stuff
mongoose.connect(
    'mongodb://localhost/bands',
    {
        useNewUrlParser: true,
        useUnifiedTopology: true
    }
);

const db = mongoose.connection;

//connection methods
db.once('open', () => {
    console.log(`Connected to MongoDB at ${db.host}: ${db.port}`)
});
db.on('error', err => {
    console.error(`Database Error\n${err}`)
});

//controllers

//routes

app.listen(3000 || process.env.PORT, () => console.log (`You're connected to port ${3000 || process.env.PORT}`))