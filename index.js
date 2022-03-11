const express = require('express');
const app = express();
require('dotenv').config();


console.log(process.env.DB_HOSTING);

//DB Connection
const connection = require('./database/db')

//Importing Routes
const authRoute = require('./routes/auth');

//Route Middlewares
app.use('/api/user', authRoute);


app.listen(3000, ()=> console.log('Server Runnning...'));
