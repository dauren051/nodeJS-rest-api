const {Schema, model} = require('mongoose')

const schema = new Schema({
    title:{
        type: String,
    },
    descpition:{
        type:String,
    },
    completed:{
        type:Boolean,
        default: false
    }
})

module.exports = model('Todo', schema)