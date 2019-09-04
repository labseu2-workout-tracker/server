exports.up = function(knex) {
  return knex.schema.alterTable('users', users => {
    users.float('weight').alter();
    users.float('height').alter();
    users.enu('unit', ['kg/m', 'pound/foot']).defaultTo('kg/m');
  });
};

exports.down = function(knex) {
  return knex.schema.table('users', users => {
    users.dropColumn('unit');
    users.integer('weight').alter();
    users.integer('height').alter();
  });
};
