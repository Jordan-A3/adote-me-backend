import { Knex } from "knex";


export async function up(knex: Knex): Promise<void> {
    return knex.schema.createTable('animals', function(table:any){
        table.increments('id')
        table.text('title').unique().notNullable()
        table.text('description').unique().notNullable()
        table.text('imageUrl').unique().notNullable()
        table.text('category').unique().notNullable()
        table.text('cep').unique().notNullable()

        table.timestamp('created_at').defaultTo(knex.fn.now())
        table.timestamp('updated_at').defaultTo(knex.fn.now())
    })
}


export async function down(knex: Knex): Promise<void> {
    return knex.schema.dropTable('animals')
}

