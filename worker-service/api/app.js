const express = require('express');

const app = express();

const PORT = 3001;

const hitting_url = '/api/worker';

app.get(`${hitting_url}`, (req, res) => {
    res.status(200).send({message: "Hello from the worker api service!"});
})

app.listen(PORT, (err) => {
    if(err) {
        console.log(`Error: `, err);
    } else {
        console.log(`App is running at ${PORT}`);
    }
});
