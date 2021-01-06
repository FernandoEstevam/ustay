/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import Knex from 'knex';

export function up(knex: Knex) {
  return knex.schema.createTable('usuarios', (table) => {
    table.increments('id').primary().unsigned();
    table.string('login', 50).unique().notNullable();
    table.string('password', 255).notNullable();
    table.timestamps(true, true);
  });
}

export function down(knex: Knex) {
  return knex.schema.dropTableIfExists('usuarios');
}
