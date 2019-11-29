const { Schema, model } = require('mongoose'); //valores e campos que o modelo pode ter
const mongoosePaginate = require('mongoose-paginate');

const BookSchema = new Schema({
    title:{
        type: String,
        required:true,
    },
    description:{
        type: String,
        required:true,
    },
    genre: {
        type: String,
        required:true,
      },
    avatar: {
      type: String,
      required:false,
    },
}, {
    timestamps:true,     //salva data de modificação e criação de itens
});

BookSchema.plugin(mongoosePaginate);
module.exports = model('Book', BookSchema);