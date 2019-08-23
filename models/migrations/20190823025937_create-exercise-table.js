exports.up = function(knex) {
  return knex.schema.createTable('exercises', exercise => {
    exercise.increments();
    exercise.string('exercise_name', 255).notNullable();
    exercise.string('exercise_ratings', 20);
    exercise.text('description').notNullable();
    exercise.string('difficulty', 255);
    exercise.string('video', 255).notNullable();
    exercise.string('picture_one', 255).notNullable();
    exercise.string('picture_two', 255).notNullable();
    exercise.string('type', 255).notNullable();
    exercise.string('muscle', 255).notNullable();
    exercise.string('equipment', 255);
    exercise.timestamps(true, true);
  });
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists('exercises');
};
