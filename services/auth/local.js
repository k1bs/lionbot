// import passport, and local strategy
const passport = require('passport')
const LocalStrategy = require('passport-local').Strategy

// bring in model and helpers
const init = require('./passport')
const User = require('../../models/User')
const authHelpers = require('./auth-helpers')

const options = {}

// call passport functions
init()

passport.use(
  // Declare new local strategy
  new LocalStrategy(options, (username, password, done) => {
    User.findByUserName(username)
      .then(user => {
        // if there's no user, return false
        if (!user) {
          return done(null, false)
        }
        // if the passwords digests don't match, return false
        if (!authHelpers.comparePass(password, user.password_digest)) {
          return done(null, false)
        } else {
          // otherwise, return the user
          return done(null, user)
        }
      }).catch(err => {
        console.log(err)
        return done(err)
      })
  })
)

module.exports = passport
