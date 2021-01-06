/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import Knex from 'knex';

export function up(knex: Knex) {
  return knex.schema.createTable('despesas', (table) => {
    table.increments('id').primary().unsigned();
    table.date('lancamento').notNullable();
    table.float('valor').notNullable();
    table.date('vencimento').notNullable();
    table.text('observacao').notNullable();

    table.integer('apartamento_id').unsigned().notNullable();
    table.integer('aporte_id').unsigned().notNullable();
    table.integer('categoria_id').unsigned().notNullable();
    table.integer('bancp_id').unsigned().notNullable();

    table
      .foreign('apartamento_id')
      .references('apartamentos.id')
      .onDelete('CASCADE')
      .onUpdate('CASCADE');

    table
      .foreign('aporte_id')
      .references('aportes.id')
      .onDelete('CASCADE')
      .onUpdate('CASCADE');

    table
      .foreign('categoria_id')
      .references('categorias.id')
      .onDelete('CASCADE')
      .onUpdate('CASCADE');

    table
      .foreign('banco_id')
      .references('bancos.id')
      .onDelete('CASCADE')
      .onUpdate('CASCADE');

    table.timestamps(true, true);
  });
}

export function down(knex: Knex) {
  return knex.schema.dropTableIfExists('despesas');
}
