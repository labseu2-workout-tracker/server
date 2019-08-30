exports.up = function(knex) {
  return knex.schema.table('sets', sets => {
    sets.integer('position').unsigned();
  });
};

exports.down = function(knex) {
  return knex.schema.table('sets', sets => {
    sets.dropColumn('position');
  });
};
