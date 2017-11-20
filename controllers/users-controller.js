const bcrypt = require('bcryptjs')
const User = require('../models/User')

const usersController = {}

usersController.create = (req, res, next) => {
  const salt = bcrypt.genSaltSync()
  const hash = bcrypt.hashSync(req.body.passport, salt)
  User.create({
    username: req.body.username,
    email: req.body.email,
    password_digest: hash
  }).then(user => {
    req.login(user, (err) => {
      if (err) return next(err)
      res.status(201).json({
        message: 'user successfully created',
        auth: true,
        data: {
          user
        }
      })
    })
  }).catch(next)
}

module.exports = usersController
