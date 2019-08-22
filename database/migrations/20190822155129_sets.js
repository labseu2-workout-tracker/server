exports.up = function(knex) {
  return knex.schema.createTable("sets", sets => {
    sets.increments();
    sets.integer("Reps");
    sets.integer("Weights");
    sets.time("Set_duration", 50);
  });
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists("sets");
};

