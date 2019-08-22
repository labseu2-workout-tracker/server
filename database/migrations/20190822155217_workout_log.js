
exports.up = function (knex) {
    return knex.schema.createTable('workout_log', workout_log => {
      workout_log.increments();
      workout_log.integer("workout_session_id")
            .unsigned()
            .references("id")
            .inTable("workout_session");
    });
  };
  
  
  exports.down = function (knex) {
    return knex.schema
      .dropTableIfExists('workout_log')
  };
