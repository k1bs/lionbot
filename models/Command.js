const db = require('../db/config')

const Command = {}

Command.findAll = () => {
  return db.query(
    `SELECT * FROM commands ORDER BY id ASC`)
}

Command.findById = (id) => {
  return db.one(
    `SELECT * FROM commands WHERE id = $1`, id)
}

Command.create = (command) => {
  return db.one(
    `INSERT into commands
    (keyword, response, standard, enabled)
    VALUES
    ($1, $2, false, true)
    RETURNING *`,
    [command.keyword, command.response])
}

Command.update = (command, id) => {
  return oneOrNone(
    `UPDATE commands SET
    keyword = $1,
    response = $2,
    WHERE id = $3
    RETURNING *`,
    [command.keyword, command.response, id]
  )
}

module.exports = Command
