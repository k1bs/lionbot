// Import db configuration
const db = require('../db/config')

// declare User as empty object
const User = {}

// findByUserName method
User.findByUserName = userName => {
  return db.oneOrNone(`
    SELECT * FROM users
    WHERE username = $1
  `, [userName])
}

// create user method
User.create = user => {
  return db.one(`
    INSERT INTO users
    (username, email, password_digest)
    VALUES ($1, $2, $3)
    RETURNING *
  `, [user.username, user.email, user.password_digest])
  // The above password_digest is a hash, and comes from the users-controller
}

// Export user object
module.exports = User
