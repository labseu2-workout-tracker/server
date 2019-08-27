exports.up = function(knex) {
  return knex.schema.createTable('workout-session', session => {
    session.increments();
    session.timestamp('session_start');
    session.timestamp('session_end');
    session
      .integer('workout_id')
      .unsigned()
      .references('id')
      .inTable('workouts')
      .onUpdate('CASCADE')
      .onDelete('CASCADE');
    session.timestamps(true, true);
  });
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists('workout-session');
};
