const bcryptjs = require('bcryptjs');
const connection = require('../database/db');
const schema = require('../model/users');

const router = require('express').Router();

router.post('/register', async(req,res)=>{

   try{
      const validation = await schema.validate(req.body);
      res.send(validation);
   }catch(err){
      res.send(err);
   }
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