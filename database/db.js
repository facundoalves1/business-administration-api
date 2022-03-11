const mysql = require('mysql');
const dotenv = require('dotenv');


dotenv.config();

const connection = mysql.createConnection({
    host: process.env.DB_HOST,
    database: process.env.DB_NAME,
    user: process.env.DB_USER,
    password :process.env.DB_PASSWORD
});

connection.connect((err)=>{
    if(err) return console.log('Cannot connect to database' + err);

    console.log('Connected to database');
});

module.exports = connection;