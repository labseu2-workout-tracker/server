exports.up = function(knex) {
  return knex.schema.createTable('workout-sets', workoutSets => {
    workoutSets.increments();
    workoutSets
      .integer('exercise_id')
      .unsigned()
      .references('id')
      .inTable('exercises')
      .onUpdate('CASCADE')
      .onDelete('CASCADE');
    workoutSets
      .integer('workout_id')
      .unsigned()
      .references('id')
      .inTable('workouts')
      .onUpdate('CASCADE')
      .onDelete('CASCADE');
    workoutSets.integer('reps').unsigned();
    workoutSets.float('weights');
    workoutSets.string('duration', 50);
    workoutSets.timestamps(true, true);
  });
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists('workout-sets');
};
