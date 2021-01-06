/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import Knex from 'knex';

export function up(knex: Knex) {
  return knex.schema.createTable('apartamentos', (table) => {
    table.increments('id').primary().unsigned();
    table.string('nome', 100).notNullable();
    table.integer('apto').notNullable();
    table.string('endereco').notNullable();
    table.float('valor_compra').notNullable();
    table.float('valor_entrada').notNullable();
    table.float('valor_financiado').notNullable();
    table.float('taxa').notNullable();
    table.integer('prazo').notNullable();
    table.date('data_assinatura').notNullable();
    table.float('metro_quadrado').notNullable();
    table.date('inicio_vencimento').notNullable();
    table.date('ultimo_vencimento').notNullable();
    table.string('sistema_amortizacao').notNullable();

    table.timestamps(true, true);
  });
}

export function down(knex: Knex) {
  return knex.schema.dropTableIfExists('apartamentos');
}
