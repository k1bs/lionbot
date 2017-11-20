const bcrypt = require('brcyptjs')

function comparePass (userPassword, databasePassword) {
  return bcrypt.compareSync(userPassword, databasePassword)
}

module.exports = {
  comparePass: comparePass
}
