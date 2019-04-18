
exports.up = function(knex, Promise) {
    return knex.schema.createTable('users', (table) => {
        table.increments('id'); //create a empty table
        table.string('name');
        table.string('email');
        table.string('password');
        table.boolean('active');
        table.timestamps(false, true);
    });
    
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('users');
};

