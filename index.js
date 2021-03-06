const express = require('express');
const app = express();


//DB Connection
const connection = require('./database/db')

//Importing Routes
const authRoute = require('./routes/auth');

//Middleware
app.use(express.json());

//Route Middlewares
app.use('/api/user', authRoute);


app.listen(3000, ()=> console.log('Server Runnning...'));
