const Command = require('../models/Command')

const commandController = {}

commandController.index = (req, res, next) => {
  Command.findAll()
    .then(commands => res.json({
      message: 'ok!',
      data: {commands}
    }))
}
