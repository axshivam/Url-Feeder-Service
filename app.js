const express = require('express');

const app = express();

const PORT = 3000;

app.get('/ping', (req, res) => {
    res.status(200).send({message: 'Ping Pong'});
});

app.listen(PORT, (err) => {
    if(err) {
        console.log(`Error: ${err}`);
    } else {
        console.log(`App is running at port ${PORT}`);
    }
});