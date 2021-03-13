const { Router } = require('express')
const router = Router()
const Todo = require('../models/todos')

router.get('/', async (req, res) => {
    const todos = await Todo.find({})
    res.send(todos)
})

router.post('/create', async ( req, res) => {
    const todo = new Todo({
        title: req.body.title
    })
    await todo.save( )
    res.status(201).json(todo || {})
})

// тут будет какой то роут

module.exports = router