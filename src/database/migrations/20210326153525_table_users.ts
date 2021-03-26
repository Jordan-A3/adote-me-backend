import { Knex } from "knex";

export async function up(knex: Knex): Promise<void> {
  return knex.schema.createTable('users', function(table:any){
    table.increments('id')
    table.text('username', 99).unique().notNullable()
    table.text('email').unique().notNullable()
    table.text('imageUrl').unique().notNullable()
    table.text('password').unique().notNullable()

    table.timestamp('created_at').defaultTo(knex.fn.now())
    table.timestamp('updated_at').defaultTo(knex.fn.now())
})
}


export async function down(knex: Knex): Promise<void> {
  return knex.schema.dropTable('users')
}

