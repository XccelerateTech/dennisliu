
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('users').del()
    .then(function () {
      // Inserts seed entries
      return knex('users').insert([
        {id: 1, name: 'elena', password: '123456'},
        {id: 2, name: 'dennis', password: '123456'},
      ]);
    });
};
