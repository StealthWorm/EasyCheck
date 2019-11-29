const { Schema, model } = require('mongoose'); //valores e campos que o modelo pode ter
const bcrypt = require('bcryptjs');

const PersonSchema = new Schema({
    name:{
        type: String,
        required:true,
    },
    email:{
        type: String,
        unique:true,
        required:true,
        lowercase:true,
    },
    password:{
        type: String,
        required:true,
        select:false,
    },
    reqBooks: [{                       
        type: Schema.Types.ObjectId,
        ref: 'Person',                 
    }],
}, {
    timestamps:true,     //salva data de modificação e criação de itens
});

/*PersonSchema.pre('save', async function(next){
    const hash = await bcrypt.hash(this.password, 10);
    this.password = hash;
    next();
});*/

//BookSchema.plugin(mongoosePaginate);
module.exports = model('Person', PersonSchema);