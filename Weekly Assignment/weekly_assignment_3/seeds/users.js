
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('users').del()
    .then(function () {
      // Inserts seed entries
      return knex('users').insert([
        {id: 1, password: 'password', username: 'dennis'},
        {id: 2, password: 'password', username: 'dennis1'},
        {id: 3, password: 'password', username: 'dennis2'}
      ]);
    });
};
