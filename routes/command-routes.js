const express = require('express')

const commandRouter = express.Router()

const commandController = require('../controllers/commands-controller')

commandRouter.get('/', commandController.index)
commandRouter.get('/:id', commandController.findById)

module.exports = commandRouter
