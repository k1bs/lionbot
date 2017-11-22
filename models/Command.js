// import db file to let model know which databse to query
const db = require('../db/config')

// initializes Command object that will hold all query methods
const Command = {}

// .findAll will query databse for all commands for specific user
Command.findAllByUserId = (userId) => {
  return db.query(
    `SELECT * FROM commands
    WHERE user_id = $1
    OR standard = true
    ORDER BY id ASC`, [userId])
}

// .findById will query database for command by id
Command.findById = (id) => {
  return db.one(
    `SELECT * FROM commands WHERE id = $1`, id)
}

// .create will import new command in databse
Command.create = (command, userId) => {
  return db.one(
    `INSERT into commands
    (keyword, response, standard, enabled, user_id)
    VALUES
    ($1, $2, false, true, $3)
    RETURNING *`,
    [command.keyword, command.response, userId])
}

// .update will update command by id
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

// .destroy will remove command from database
Command.destroy = (id) => {
  return db.none(
    `DELETE from commands
    WHERE id = $1`, id)
}

// .enableToggle will toggle the commands enabled/disabled status
Command.enableToggle = (id) => {
  return db.oneOrNone(
    `UPDATE commands
    SET enabled = NOT enabled
    WHERE id = $1
    RETURNING *`, id)
}

// .findAll will return all commands (for testing)
Command.findAll = () => {
  return db.query(
    `SELECT * FROM commands`
  )
}

// .destroyAll will erase everything from the table (for testing)
Command.destroyAll = () => {
  return db.none(
    `DELETE FROM commands`
  )
}

module.exports = Command
