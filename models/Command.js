const db = require('../db/config')

const Command = {}

Command.findAll = () => {
  return db.query(
    `SELECT * FROM commands ORDER BY id ASC`)
}

Command.findById = (id) => {
  return db.One(
    `SELECT * FROM commands WHERE id = $1`, id)
}
module.exports = Command
