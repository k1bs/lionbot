DROP TABLE IF EXISTS commands;
DROP TABLE IF EXISTS users;
DROP TABLE IF EXISTS users_commands;

CREATE TABLE IF NOT EXISTS commands (
  id SERIAL PRIMARY KEY,
  keyword VARCHAR(255) NOT NULL,
  response TEXT NOT NULL,
  default_command BOOLEAN NOT NULL,
  enabled BOOLEAN NOT NULL
);

CREATE TABLE IF NOT EXISTS users (
  id SERIAL PRIMARY KEY,
  username VARCHAR(255) UNIQUE NOT NULL,
  password_digest TEXT NOT NULL,
  email VARCHAR(255)
);

CREATE TABLE IF NOT EXISTS users_commands (
  id SERIAL PRIMARY KEY,
  user_id INTEGER REFERENCES users(id),
  command_id INTEGER REFERENCES commands(id)
);
