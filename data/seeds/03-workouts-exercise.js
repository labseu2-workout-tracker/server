exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('workouts-exercises')
    .del()
    .then(function() {
      // Inserts seed entries
      return knex('workouts-exercises').insert([
        {
          exercise_id: 296,
          workout_id: 1,
        },

        {
          exercise_id: 301,
          workout_id: 1,
        },
        {
          exercise_id: 323,
          workout_id: 1,
        },
      ]);
    });
};
