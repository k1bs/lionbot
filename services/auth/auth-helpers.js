// Import bcrypt
const bcrypt = require('bcryptjs')

// define comparpass
function comparePass (userPassword, databasePassword) {
  // use bcrypt's compareSync to match userpassword and databasePassword
  // returns boolean
  return bcrypt.compareSync(userPassword, databasePassword)
}

// Export object containing method above
module.exports = {
  comparePass: comparePass
}
