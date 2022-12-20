const mysql = require('mysql');
require('dotenv').config();

function createDatabaseConnection() {
    const connection = mysql.createConnection({
        host: process.env.DATABASE_HOST,
        port: process.env.DATABASE_PORT,
        user: process.env.DATABASE_USER,
        password: process.env.DATABASE_PASSWORD,
        database: process.env.SELECTED_DATABASE
    });

    connection.connect((err) => {
        if(err) {
            console.log(`Error: `, err);
        } else {
            console.log(`Database connected successfully!`);
        }
    });

    return connection;
}

module.exports = createDatabaseConnection;