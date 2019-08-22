exports.up = function(knex) {
  return knex.schema.createTable("workout", workout => {
    workout.increments();
    workout.string("workout_name", 50).notNullable().unique();
    workout.string("workout_description", 300).notNullable();
    workout.string("image_url", 50).unique();
    workout.integer("exercise_id").references("id").inTable("exercise");
  });
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists("workout");
};

