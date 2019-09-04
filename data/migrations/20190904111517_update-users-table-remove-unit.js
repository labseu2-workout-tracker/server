exports.up = function(knex) {
  return knex.schema.alterTable('users', users => {
    users.dropColumn('unit');
  });
};

exports.down = function(knex) {
  return knex.schema.alterTable('users', users => {
    users
      .enu('unit', ['kg/m', 'pound/foot'])
      .defaultTo('kg/m')
      .alter();
  });
};
