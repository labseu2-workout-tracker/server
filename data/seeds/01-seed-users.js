exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('users')
    .del()
    .then(function() {
      // Inserts seed entries
      return knex('users').insert([
        {
          username: 'john',
          password: 'spuff',
          email: 'lol@lol.com',
        },
        {
          username: 'johny',
          password: 'spuffy',
          email: 'lol@loly.com',
        },
      ]);
    });
};
