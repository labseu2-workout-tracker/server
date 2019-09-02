exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('workouts')
    .del()
    .then(function() {
      // Inserts seed entries
      return knex('workouts').insert([
        {
          workout_name: 'Legs',
          workout_description:
            'The perfect workout for your leg muscles',
          image_url: 'https://i.postimg.cc/bvLZzGrP/squats.jpg',
          
        },
        {
          workout_name: 'Arms',
          workout_description:
            'The perfect workout for your leg muscles',
          image_url: 'https://i.postimg.cc/bvLZzGrP/squats.jpg',
          
        },
        {
          workout_name: 'Chest',
          workout_description:
            'The perfect workout for your leg muscles',
          image_url: 'https://i.postimg.cc/bvLZzGrP/squats.jpg',
          
        },
      ]);
    });
};
