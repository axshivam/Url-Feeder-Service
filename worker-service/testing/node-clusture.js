// testing of how can we clustered a node app
// we are doing this for application availability and 

const express = require('express');

const os = require('os');

const cluster = require('cluster');

const cpuNums = os.cpus().length;

console.log(cpuNums); // mine is octacore system


if(!cluster.Worker()) {
    for(let i=0; i<cpuNums; i++) {
        cluster.fork();
    }

    // if any process down, start a new one
    cluster.on('exit', () => {
        cluster.fork();
    });
} else {
    // here start the primary app (master one);
    const app = express();

    app.get('/', (req, res) => {
        res.send('Hello from cluster app!');
    });

    app.listen(3000, (err) => {
        if(err) {
            console.log(`Error: ${err}`);
        }
    });
}

