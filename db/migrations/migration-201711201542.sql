-- Remove unnecessary users_commands table, create column user_id
DROP TABLE IF EXISTS users_commands;
ALTER TABLE commands DROP COLUMN IF EXISTS user_id;
ALTER TABLE commands ADD COLUMN user_id INTEGER NOT NULL;
