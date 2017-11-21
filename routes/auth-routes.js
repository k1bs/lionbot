// import express router, local strategy, and users controller
const express = require('express')
const authRouter = express.Router()
const passport = require('../services/auth/local')
const usersController = require('../controllers/users-controller')

// on post requests to /register, user create method
authRouter.post('/register', usersController.create)

// on post requests to /login, user local strategy
authRouter.post('/login', passport.authenticate('local', {
  successRedirect: '/api/auth/verify',
  failureRedirect: '/api/auth/verify',
  failureFlash: true
}))

// on get requests to verify, check for user status
authRouter.get('/verify', (req, res) => {
  if (req.user) {
    // if user, return auth-true and the user
    return res.status(200).json({
      message: 'ok',
      auth: true,
      data: {
        user: req.user
      }
    })
  } else {
    // otherwise, return auth-false
    return res.status(400).json({
      message: 'login failed',
      auth: false,
      data: {
        user: null
      }
    })
  }
})

// on gets to /logout, return auth-false
authRouter.get('/logout', (req, res) => {
  req.logout()
  res.json({
    message: 'logged out',
    auth: false,
    data: {
      user: null
    }
  })
})

module.exports = authRouter
