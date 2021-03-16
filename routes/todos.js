const { Router } = require('express')
const router = Router()
const Todo = require('../models/todos')

router.get('/', async (req, res) => {
    const todos = await Todo.find({})
    res.send(todos)
})

router.post('/create', async ( req, res) => {
    if(req.body.title){
        const todo = new Todo({
            title: req.body.title,
            description: req.body.description
        })
        await todo.save( )
        res.status(201).json(todo || {})
    }else{
        res.status(400).json('Необходимо поле title!')
    }
})

router.put('/update', async (req, res) => {
    // if(){

    // }else{

    // }
})

// тут будет какой то роут

module.exports = router