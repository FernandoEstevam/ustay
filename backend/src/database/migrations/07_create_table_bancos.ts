/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import Knex from 'knex';

export function up(knex: Knex) {
  return knex.schema.createTable('bancos', (table) => {
    table.increments('id').primary().unsigned();
    table.string('nome').notNullable();
    table.integer('agencia');
    table.integer('conta');
    table.integer('digito');
    table.timestamps(true, true);
  });
}

export function down(knex: Knex) {
  return knex.schema.dropTableIfExists('bancos');
}
