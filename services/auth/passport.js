// Import passport and User model
const passport = require('passport')
const User = require('../../models/User')

// Declare basic serialize and deserialize functions
module.exports = () => {
  passport.serializeUser((user, done) => {
    done(null, user.username)
  })

  passport.deserializeUser((username, done) => {
    // Calls to User table
    User.findByUserName(username)
      .then(user => {
        done(null, user)
      }).catch(err => {
        done(err, null)
      })
  })
}
