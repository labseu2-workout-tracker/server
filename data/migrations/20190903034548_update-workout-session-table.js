exports.up = function(knex) {
  return knex.schema.alterTable('workout-session', workoutSession => {
    workoutSession
      .integer('workout_id')
      .notNullable()
      .alter();
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.alterTable('workout-session', workoutSession => {
    workoutSession
      .integer('workout_id')
      .defaultTo(null)
      .alter();
  });
};
