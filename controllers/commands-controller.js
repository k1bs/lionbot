// import Command model file for databse queries
const Command = require('../models/Command')

// initializes controller object that will hold controller methods
const commandController = {}

// .index method will handle requests to the root path
// will send back all commands for user
commandController.index = (req, res, next) => {
  Command.findAll(req.user.id)
    .then(commands => res.json({
      message: 'Ok!',
      data: commands
    }))
}

// .findById method will be used to handle requests to the '/:id' path
// will send back data for :id
commandController.findById = (req, res, next) => {
  Command.findById(req.params.id)
    .then(command => res.json({
      message: 'Ok!',
      data: command
    }))
}

// .create method will handle requests to the root path
// will import created command data into database
commandController.create = (req, res, next) => {
  Command.create({
    keyword: req.body.keyword,
    response: req.body.response
  }, req.user.id)
    .then(command => res.json({
      message: 'ok!',
      data: command
    }))
}

// .update method will handle requests to the '/:id' path
// will update command by id
commandController.update = (req, res, next) => {
  Command.update({
    keyword: req.body.keyword,
    response: req.body.response
  }, req.params.id)
    .then(command => res.json({
      message: 'Command updated successfully!',
      data: command
    }))
}

// .delete method will handle requests to the '/:id ' path
// will delete command from database
commandController.delete = (req, res, next) => {
  Command.destroy(req.params.id)
    .then(() => res.json({
      message: 'Command deleted successfully!'
    }))
}

module.exports = commandController
