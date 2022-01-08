const mongoose = require('mongoose')

const taskSchema = new mongoose.Schema({
    name:{type:String,
    required:[true, 'must provide name'],
    trim:true,
    maxlength:[20, 'name cannot more than 20 characters']},
     completed:{type:Boolean,
        default:false},
     //number:Number ......jo jm pass krenge schema me wahi pass hoga posstman me aur wahi dhikayega mongoDB me........
})

module.exports = mongoose.model('task',taskSchema)