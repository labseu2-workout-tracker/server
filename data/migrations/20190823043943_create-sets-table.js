exports.up = function(knex) {
  return knex.schema.createTable('sets', set => {
    set.increments();
    set
      .integer('workout_exercise_id')
      .unsigned()
      .references('id')
      .inTable('workouts-exercises')
      .onUpdate('CASCADE')
      .onDelete('CASCADE');
    set.integer('reps').unsigned();
    set.float('weights');
    set.string('duration', 50);
    set.timestamps(true, true);
  });
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists('sets');
};
