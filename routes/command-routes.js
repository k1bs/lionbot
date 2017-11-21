// express package: will initialize the usage of express, our back-end framework
const express = require('express')

// initializes router to wire paths accessible on our app
const commandRouter = express.Router()

const commandController = require('../controllers/commands-controller')

commandRouter.get('/', commandController.index)
commandRouter.get('/:id', commandController.findById)
commandRouter.post('/', commandController.create)
commandRouter.put('/:id', commandController.update)
commandRouter.delete('/:id', commandController.delete)

module.exports = commandRouter
