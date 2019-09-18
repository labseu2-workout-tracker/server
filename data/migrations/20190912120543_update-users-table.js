exports.up = async function(knex) {
  await knex('users')
    .where('id', '>', '0')
    .del();
  return knex.schema.alterTable('users', users => {
    users.dropColumn('user_level');
    users.string('fullname', 255).notNullable();
  });
};

exports.down = function(knex) {
  return knex.schema.alterTable('users', users => {
    users
      .enu('user_level', ['Beginner', 'Intermediate', 'Expert'])
      .alter();
    users.dropColumn('fullname');
  });
};
