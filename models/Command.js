const db = require('../db/config')

const Command = {}

Command.findAll = () => {
  return db.query(
    `SELECT * FROM commands ORDER BY id ASC`
  )
}

module.exports = Command
