exports.up = function(knex) {
  return knex.schema.table('workouts', workouts => {
    workouts.enu('level', ['Beginner', 'Intermediate', 'Expert']);
  });
};

exports.down = function(knex) {
  return knex.schema.table('workout-sets', workouts => {
    workouts.dropColumn('level');
  });
};
