const express = require('express')
const Todo = require('../models/todo')
const { log } = require('../utils')

const todo = express.Router()
todo.get('/', (request, response) => {
    const todoList = Todo.all()
    const args = {
        todos: todoList
    }
    response.render('todo/index.html', args)
})

todo.post('/add', (request, response) => {
    const form = request.body
    const t = Todo.create(form)
    response.redirect('/todo')
})

todo.get('/delete/:todoId', (reqeust, response) => {
    const todoId = Number(request.params.todoId)
    const t = Todo.remove(todoId)
    response.redirect('/todo')
})

todo.get('/edit/:todoId', (request, response) => {
    const id = Number(request.params.todoId)
    const t = Todo.get(id)
    const args = {
        todo: t
    }
    response.render('todo/edit.html', args)
})

todo.post('/update', (request, response) => {
    const form = request.body
    const t = Todo.update(form)
    response.redirect('/todo')
})
todo.get('/complete/:todoId', (request, response) => {
    const id = Number(request.params.todoId)
    const t = Todo.completed(id, true)
    response.redirect('/todo')
})

module.exports = todo