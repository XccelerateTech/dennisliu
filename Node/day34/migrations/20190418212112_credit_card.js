
exports.up = function(knex, Promise) {
  return knex.schema.createTable('credit_cards', (table) => {
      table.increments();
      table.integar('number');
      table.date('expiry_date');
      table.integer('clients_id').unsigned();
      table.foreign('clients_id').references('clients.id');
      table.timmestamps(false, true);
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('credit_cards');
};
