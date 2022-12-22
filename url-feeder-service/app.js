const express = require('express');

require('dotenv').config();

const app = express();

const createDatabaseConnection = require('./database/config');

const produce = require('./kafka/producer/index');

const PORT = process.env.APP_PORT;


// middleware for parsing request data
app.use(express.json());

// connecting with the database
const connection = createDatabaseConnection();

app.get('/ping', (req, res) => {
    res.status(200).send({message: 'Ping Pong'});
});

app.post('/ping', (req, res) => {

    // getting the whole url
    // const whole_url = `${req.protocol}://${req.get('host')}${req.originalUrl}`;

    // data persistence logic
    const { url } = req.body;
    const current_date = Date.now().toString();

    const database_query = `Insert into url_collection(url, created_date) values('${url}', '${current_date}')`;

    connection.query(database_query, (err, result) => {
        if(err) {
            console.log(`Error: `, err);
        } else {
            console.log('Database result: ', result);
        }
    });

    produce(url);

    res.status(201).send({message: `Url added successfully!`});
});

app.listen(PORT, (err) => {
    if(err) {
        console.log(`Error: ${err}`);
    } else {
        console.log(`App is running at port ${PORT}`);
    }
});