const express = require('express');

require('dotenv').config();

const app = express();

const createDatabaseConnection = require('./database/config');

const PORT = process.env.APP_PORT;


// middleware for parsing request data
app.use(express.json());

// connecting with the database
const connection = createDatabaseConnection();

app.get('/ping', (req, res) => {
    res.status(200).send({message: 'Ping Pong'});
});

app.post('/ping', (req, res) => {
    console.log(`Request Body -> ${req.body}`);

    res.status(201).send({message: req.body});
})

app.listen(PORT, (err) => {
    if(err) {
        console.log(`Error: ${err}`);
    } else {
        console.log(`App is running at port ${PORT}`);
    }
});