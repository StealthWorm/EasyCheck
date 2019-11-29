const mongoose = require('mongoose'); mongoose.set('useCreateIndex', true);
const bcrypt = require('bcryptjs');
const Person =require("../models/Person");
const Book = require("../models/Book");

module.exports = {

    async index(req, res){
       const users = await Person.find();
        res.send(users);
      
      /*const loggedPerson = await Person.findById(user);

      if(loggedPerson){
            console.log("Usuário Encontrado");
            //const books = await Book.find();
            return res.json(user);
        }else{
            console.log("Usuário inexistente");
            return res.status(400).json({ error: 'Usuário não existe!'});
        }*/
    },
 
    async login(req,res){
        //res.send(users); 
        //const  user = Person.findOne(user => user.email === req.body.email);
        const  user  = { email: req.body.email , password: req.body.password}
        if(user  == null){
            return res.status(400).send({ error: 'User do not exists'});
        }

        try{
            if(await Person.findOne({email : user.email})){
            //if(await bcrypt.compare(req.body.password, user.password)){
                res.send('success')
                return true;
            }else{
                res.send('not success')
                return false;
            }
        }catch{
            Response.status(500).send()
        }
        
    },

    async cadastro(req,res){
        const  user  = { name: req.body.name , email: req.body.email , password: req.body.password} ;
        
        try{
            if(await Person.findOne({email : user.email}))
               return res.status(400).json({ error: 'Usuário Já cadastrado!'});

                //users.push(user);
                const person = await Person.create(user);
            
                return res.send(person); 

        } catch (err) {
            return res.status(400).send({ error: 'Registration Failed'});
        }         
    },

};
//<link rel='stylesheet' href='stylesheets/index.css'/>  testar uma versão desse comando no frontend