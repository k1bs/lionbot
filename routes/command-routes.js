// express package: will initialize the usage of express, our back-end framework
const express = require('express')

// initializes router to wire paths accessible on our app
const commandRouter = express.Router()

// imports controller file to handle requests and respose data
const commandController = require('../controllers/commands-controller')

// detail of which controller method with handle certain requests to below paths
commandRouter.get('/', commandController.index)
commandRouter.get('/:id', commandController.findById)
commandRouter.post('/', commandController.create)
commandRouter.put('/:id', commandController.update)
commandRouter.put('/enable/:id', commandController.enableToggle)
commandRouter.delete('/:id', commandController.delete)

// export router file for use in server.js
module.exports = commandRouter
