exports.up = function(knex) {
  return knex.schema.table('workout-session', session => {
    session
      .integer('user_id')
      .unsigned()
      .references('id')
      .inTable('users')
      .onUpdate('CASCADE')
      .onDelete('CASCADE')
      .notNullable();
  });
};

exports.down = function(knex) {
  return knex.schema.table('workout-session', session => {
    session.dropColumn('user_id');
  });
};
