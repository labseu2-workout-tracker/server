exports.up = function(knex) {
  return knex.schema.createTable("workout_session", workout => {
    workout_session.increments();
    workout_session
      .timestamp("created_at", { precision: 6 })
      .defaultTo(knex.fn.now(6));
    workout_session
      .foreign("workout_id")
      .references("id")
      .inTable(workout);
    workout_session
      .foreign("exercise_id")
      .references("id")
      .inTable(exercise);
  });
};

exports.down = function(knex) {};
