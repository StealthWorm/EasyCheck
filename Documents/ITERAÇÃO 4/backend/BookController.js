const mongoose = require('mongoose'); mongoose.set('useCreateIndex', true);

//const Book = mongoose.model("Book");
const Book = require("../models/Book");

module.exports = {
   //dps de instalar mongoose-paginate ele divide os itens em um numero definido de paginas
    async index(req, res){
      const  { page = 1 } = req.query;
      const books = await Book.paginate({}, { page , limit :10 }); //primeiro param é filtro , segundo é qual a pag atual e o tam da pag que quero

      return res.json(books);
    },

    //CRUD
    async show(req, res){
      const book = await Book.findById(req.params.id);

      return res.json(book);
    },
    async update(req, res){
      //{ new : true } pede dados atualizados para o mangoose e add na variavel book
      const book = await Book.findByIdAndUpdate(req.params.id, req.body, { new : true });

      return res.json(book);
    },
    async destroy(req, res){
      const book = await Book.findByIdAndRemove(req.params.id);

      return res.send();
    },


    //criação de livros
    async store(req,res){      
      const book = await Book.create(req.body);

      return res.json(book);
  }
};