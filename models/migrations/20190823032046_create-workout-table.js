exports.up = function(knex) {
  return knex.schema.createTable('workouts', workout => {
    workout.increments();
    workout
      .string('workout_name', 255)
      .notNullable()
      .unique();
    workout.text('workout_description').notNullable();
    workout.string('image_url', 255);
    workout
      .integer('user_id')
      .unsigned()
      .references('id')
      .inTable('users')
      .onUpdate('CASCADE')
      .onDelete('CASCADE');
    workout.timestamps(true, true);
  });
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists('workouts');
};
