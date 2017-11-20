const db = require('../db/config')

const Command = {}

Command.findAll = (userId) => {
  return db.query(
    `SELECT * FROM commands
    WHERE user_id = $1
    OR standard = true
    ORDER BY id ASC`, [userId])
}

Command.findById = (id) => {
  return db.one(
    `SELECT * FROM commands WHERE id = $1`, id)
}

Command.create = (command, userId) => {
  return db.one(
    `INSERT into commands
    (keyword, response, standard, enabled, user_id)
    VALUES
    ($1, $2, false, true, $3)
    RETURNING *`,
    [command.keyword, command.response, userId])
}

Command.update = (command, id) => {
  return db.oneOrNone(
    `UPDATE commands SET
    keyword = $1,
    response = $2
    WHERE id = $3
    RETURNING *`,
    [command.keyword, command.response, id]
  )
}

Command.destroy = (id) => {
  return db.none(
    `DELETE from commands
    WHERE id = $1`, id)
}

module.exports = Command
