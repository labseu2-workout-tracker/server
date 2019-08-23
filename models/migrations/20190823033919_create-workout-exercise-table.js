exports.up = function(knex) {
  return knex.schema.createTable('workouts-exercises', table => {
    table.increments();
    table
      .integer('exercise_id')
      .unsigned()
      .references('id')
      .inTable('exercises')
      .onUpdate('CASCADE')
      .onDelete('CASCADE');
    table
      .integer('workout_id')
      .unsigned()
      .references('id')
      .inTable('workouts')
      .onUpdate('CASCADE')
      .onDelete('CASCADE');
    table.timestamps(true, true);
  });
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists('workouts-exercises');
};
