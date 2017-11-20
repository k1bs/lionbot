const Command = require('../models/Command')

const commandController = {}

commandController.index = (req, res, next) => {
  Command.findAll()
    .then(commands => res.json({
      message: 'Ok!',
      data: commands
    }))
}

commandController.findById = (req, res, next) => {
  Command.findById(req.params.id)
    .then(command => res.json({
      message: 'Ok!',
      data: command
    }))
}

commandController.create = (req, res, next) => {
  Command.create({
    keyword: req.body.keyword,
    response: req.body.response
  })
    .then(command => res.json({
      message: 'ok!',
      data: command
    }))
}

commandController.update = (req, res, next) => {
  Command.update({
    keyword: req.body.keyword,
    response: req.body.response
  }, req.user.id)
    .then(command => res.json({
      message: 'Command updated succesfully!',
      data: command
    }))
}

module.exports = commandController
