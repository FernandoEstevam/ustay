/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import Knex from 'knex';

export function up(knex: Knex) {
  return knex.schema.createTable('tipos', (table) => {
    table.increments('id').primary().unsigned();
    table.string('tipo', 15).unique().notNullable();
    table.timestamps(true, true);
  });
}

export function down(knex: Knex) {
  return knex.schema.dropTableIfExists('tipos');
}
