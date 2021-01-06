import path from 'path';
import dotenv from 'dotenv';

dotenv.config();

module.exports = {
  client: process.env.CLIENT,
  connection: {
    host: process.env.HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
  },

  migrations: {
    directory: path.resolve(__dirname, 'src', 'database', 'migrations'),
  },
  seeds: {
    directory: path.resolve(__dirname, 'src', 'database', 'seeds'),
  },

  useNullDefault: true,
};
