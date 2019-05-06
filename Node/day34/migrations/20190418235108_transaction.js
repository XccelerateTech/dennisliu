
exports.up = function(knex, Promise) {
    return knex.schema.createTable('transaction', (table) => {
        table.increments();
        table.integar('transaction_number');
        table.integar('amount');
        table.integer('clients_id').unsigned();
        table.foreign('clients_id').references('clients.id');
        table.integer('credit_card_id').unsigned();
        table.foreign('credit_card_id').references('credit_card.id');
        table.timmestamps(false, true);
    });
};

exports.down = function(knex, Promise) {
    return knex.schema.dropTable('transaction');
};
