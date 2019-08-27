exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('workouts')
    .del()
    .then(function() {
      // Inserts seed entries
      return knex('workouts').insert([
        {
          id: 1,
          workout_name: 'Squats',
          workout_description: 'the best workout for legs',
          image_url: 'https://i.postimg.cc/bvLZzGrP/squats.jpg',
        },
      ]);
    });
};
