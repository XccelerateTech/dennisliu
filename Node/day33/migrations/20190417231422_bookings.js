
exports.up = function(knex, Promise) {
    return knex.schema.createTable('bookings', (table) => {
        table.increments('id'); //create a empty table
        table.date('date');
        table.string('remark');
        table.timestamps(false, true);
    });
};

exports.down = function(knex, Promise) {
    return knex.schema.dropTable('bookings');
};
