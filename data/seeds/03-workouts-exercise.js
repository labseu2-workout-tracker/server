exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('workouts-exercises')
    .del()
    .then(function() {
      // Inserts seed entries
      return knex('workouts-exercises').insert([
        { id: 1, exercise_id: 1, workout_id: 1 },
      ]);
    });
};
