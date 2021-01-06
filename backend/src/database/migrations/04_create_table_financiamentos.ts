/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import Knex from 'knex';

export function up(knex: Knex) {
  return knex.schema.createTable('financiamentos', (table) => {
    table.increments('id').primary().unsigned();
    table.date('vencimento').notNullable();
    table.float('valor_financiamento').notNullable();
    table.float('valor_juros').notNullable();
    table.float('seguro_mpi').notNullable();
    table.float('seguro_dfi').notNullable();
    table.float('taxa_adm_contrato').notNullable();
    table.float('decrescimo_mensal').notNullable();
    table.float('outros_valores');
    table.float('valor_total');
    table.boolean('situacao').notNullable();
    table.text('observacoes');

    table.integer('apartamento_id').unsigned().notNullable();
    table.integer('banco_id').unsigned().notNullable();

    table
      .foreign('apartamento_id')
      .references('apartamentos.id')
      .onUpdate('CASCADE')
      .onDelete('CASCADE');

    table
      .foreign('banco_id')
      .references('bancos.id')
      .onUpdate('CASCADE')
      .onDelete('CASCADE');

    table.timestamps(true, true);
  });
}

export function down(knex: Knex) {
  return knex.schema.dropTableIfExists('financiamentos');
}
