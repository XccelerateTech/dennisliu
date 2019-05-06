
exports.up = function(knex, Promise) {
    return knex.schema.createTable('clients', (table) => {
        table.increments('id'); //create a empty table
        table.string('name');
        table.string('email');
        table.integer('age');
        table.timestamps(false, true);
    });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('clients');
};
