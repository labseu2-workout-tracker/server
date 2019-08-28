exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('workouts')
    .del()
    .then(function() {
      // Inserts seed entries
      return knex('workouts').insert([
        {
<<<<<<< HEAD
          workout_name: 'Legs',
          workout_description: 'The perfect workout for your leg muscles',
=======
          id: 1,
          workout_name: 'Squats',
          workout_description: 'the best workout for legs',
>>>>>>> Fix eslint/prettier error
          image_url: 'https://i.postimg.cc/bvLZzGrP/squats.jpg',
        },
      ]);
    });
};
