/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import Knex from 'knex';

export function up(knex: Knex) {
  return knex.schema.createTable('categorias', (table) => {
    table.increments('id').primary().unsigned();
    table.string('tipo', 50).unique().notNullable();

    table.integer('tipo_id').unsigned().notNullable();

    table
      .foreign('tipo_id')
      .references('tipos.id')
      .onDelete('CASCADE')
      .onUpdate('CASCADE');

    table.timestamps(true, true);
  });
}

export function down(knex: Knex) {
  return knex.schema.dropTableIfExists('categorias');
}
