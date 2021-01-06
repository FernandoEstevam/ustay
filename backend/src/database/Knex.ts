import Knex from 'knex';
import dotenv from 'dotenv';

dotenv.config();

const knex = Knex({
  client: process.env.CLIENT,
  connection: {
    host: process.env.HOST,
    user: process.env.DB_USER,
    password: process.env.DB_NAME,
    database: process.env.DB_NAME,
  },
});

export default knex;
