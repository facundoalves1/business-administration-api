const bcryptjs = require('bcryptjs');
const connection = require('../database/db');

const router = require('express').Router();

router.post('/register', async(req,res)=>{

   const user_name = req.body.user;
   const password = req.body.password;
   const email = req.body.email;
   
   const hashedPass = await bcryptjs.hash(password, 10);

   connection.query('INSERT INTO users SET ?', {user_name:user_name, user_password:hashedPass,user_email:email}, async(err,result)=>{
       
    if(err) return res.status(400).send(err);

    res.send('User inserted succesful');
    res.send('Registered...');

   });
    
    
});


module.exports = router;