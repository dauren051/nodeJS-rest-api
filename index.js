const express = require('express');
const mongoose = require('mongoose')

const todoRoutes = require('./routes/todos')
const PORT = process.env.PORT || 3000

const app = express()
app.use(express.urlencoded({ extended: true }))
app.use(express.json())

app.use(todoRoutes)
async function start(){
    try{
        await mongoose.connect('mongodb+srv://dauren051:E8nWhK4NDqHL2ak@cluster0.yjzqz.mongodb.net/todos',{
            useNewUrlParser: true,
            useFindAndModify:false    
        })
        app.listen( PORT, () => {
            console.log('Server has been started')
        })
    } catch(e){
        console.log(e)
    }
}

start()
