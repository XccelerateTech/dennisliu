
exports.up = function(knex, Promise) {
    return knex.schema.createTable('note', (table) => {
        table.increments('id'); //create a empty table
        table.string('notes');
        table.integer('user_id').unsigned();
        table.foreign('user_id').references('users.id');
        table.timestamps(false, true);
    });
};

exports.down = function(knex, Promise) {
    return knex.schema.dropTable('note');
};