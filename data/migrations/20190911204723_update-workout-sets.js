exports.up = function(knex) {
  return knex.schema.table('workout-sets', workoutSets => {
    workoutSets.integer('position').unsigned();
  });
};

exports.down = function(knex) {
  return knex.schema.table('workout-sets', workoutSets => {
    workoutSets.dropColumn('position');
  });
};
