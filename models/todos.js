const {Schema, model} = require('mongoose')

async function setId(){
    const todos = await Todo.find({})
    let num = todos.length
    return num + 1
}

const schema = new Schema({
    // id:{
    //     type: Number,
    //     default: setId()
    // },
    title:{
        type: String,
        required:true,
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