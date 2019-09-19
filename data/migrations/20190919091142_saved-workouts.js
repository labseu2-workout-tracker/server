exports.up = function(knex) {
  return knex.schema.createTable('saved_workouts', savedWorkout => {
    savedWorkout.increments();
    savedWorkout
      .integer('workouts_id')
      .unsigned()
      .references('id')
      .inTable('workouts')
      .onUpdate('CASCADE')
      .onDelete('CASCADE');
    savedWorkout
      .integer('user_id')
      .unsigned()
      .references('id')
      .inTable('users')
      .onUpdate('CASCADE')
      .onDelete('CASCADE');
    savedWorkout.timestamps(true, true);
  });
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists('saved_workouts');
};
