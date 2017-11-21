const bcrypt = require('bcryptjs')
const User = require('../models/User')

const usersController = {}

// define create method
usersController.create = (req, res, next) => {
  // Generate salt
  const salt = bcrypt.genSaltSync()
  // generate hash from salt and input field
  const hash = bcrypt.hashSync(req.body.password, salt)
  // Add to user table
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
