
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('table_name').del()
    .then(function () {
      // Inserts seed entries
      return knex('table_name').insert([
        {id: 1, exercise_id: 1, workout_id:1},
        {id: 2, exercise_id: 2, workout_id:1},
        {id: 3, exercise_id: 3, workout_id:1}
      ]);
    });
};
