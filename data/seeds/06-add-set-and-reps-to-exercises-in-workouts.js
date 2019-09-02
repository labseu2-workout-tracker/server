exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('sets')
    .del()
    .then(function() {
      // Inserts seed entries
      return knex('sets').insert([
        // Chest and Shoulder Smackdown 4-9
        { workout_exercise_id: 4, reps: 10, position: 1 },
        { workout_exercise_id: 4, reps: 8, position: 2 },
        { workout_exercise_id: 4, reps: 8, position: 3 },
        { workout_exercise_id: 4, reps: 6, position: 4 },

        { workout_exercise_id: 5, reps: 12, position: 1 },
        { workout_exercise_id: 5, reps: 12, position: 2 },
        { workout_exercise_id: 5, reps: 10, position: 3 },
        { workout_exercise_id: 5, reps: 10, position: 4 },

        { workout_exercise_id: 6, reps: 12, position: 1 },
        { workout_exercise_id: 6, reps: 11, position: 2 },
        { workout_exercise_id: 6, reps: 10, position: 3 },

        { workout_exercise_id: 7, reps: 8, position: 1 },
        { workout_exercise_id: 7, reps: 8, position: 2 },
        { workout_exercise_id: 7, reps: 8, position: 3 },

        { workout_exercise_id: 8, reps: 10, position: 1 },
        { workout_exercise_id: 8, reps: 10, position: 2 },
        { workout_exercise_id: 8, reps: 10, position: 3 },

        { workout_exercise_id: 9, reps: 10, position: 1 },
        { workout_exercise_id: 9, reps: 10, position: 2 },
        { workout_exercise_id: 9, reps: 10, position: 3 },

        // Full-Body Circuit 10-17
        { workout_exercise_id: 10, reps: 15, position: 1 },
        { workout_exercise_id: 10, reps: 15, position: 2 },
        { workout_exercise_id: 10, reps: 15, position: 3 },

        { workout_exercise_id: 11, reps: 10, position: 1 },
        { workout_exercise_id: 11, reps: 10, position: 2 },
        { workout_exercise_id: 11, reps: 10, position: 3 },

        { workout_exercise_id: 12, reps: 15, position: 1 },
        { workout_exercise_id: 12, reps: 15, position: 1 },
        { workout_exercise_id: 12, reps: 15, position: 1 },

        { workout_exercise_id: 13, reps: 30, position: 1 },
        { workout_exercise_id: 13, reps: 30, position: 1 },
        { workout_exercise_id: 13, reps: 30, position: 1 },

        {
          workout_exercise_id: 14,
          duration: '20 seconds',
          position: 1,
        },
        {
          workout_exercise_id: 14,
          duration: '20 seconds',
          position: 2,
        },
        {
          workout_exercise_id: 14,
          duration: '20 seconds',
          position: 3,
        },

        { workout_exercise_id: 15, reps: 10, position: 1 },
        { workout_exercise_id: 15, reps: 10, position: 2 },
        { workout_exercise_id: 15, reps: 10, position: 3 },

        { workout_exercise_id: 16, reps: 10, position: 1 },
        { workout_exercise_id: 16, reps: 10, position: 2 },
        { workout_exercise_id: 16, reps: 10, position: 3 },

        {
          workout_exercise_id: 17,
          duration: '60 seconds',
          position: 1,
        },
        {
          workout_exercise_id: 17,
          duration: '60 seconds',
          position: 2,
        },
        {
          workout_exercise_id: 17,
          duration: '60 seconds',
          position: 3,
        },

        // Arm-Blast
        { workout_exercise_id: 18, reps: 12, position: 1 },
        { workout_exercise_id: 18, reps: 10, position: 2 },
        { workout_exercise_id: 18, reps: 8, position: 3 },
        { workout_exercise_id: 18, reps: 6, position: 4 },
        { workout_exercise_id: 18, reps: 4, position: 5 },

        { workout_exercise_id: 19, reps: 12, position: 1 },
        { workout_exercise_id: 19, reps: 10, position: 2 },
        { workout_exercise_id: 19, reps: 8, position: 3 },
        { workout_exercise_id: 19, reps: 6, position: 4 },
        { workout_exercise_id: 19, reps: 4, position: 5 },

        { workout_exercise_id: 20, reps: 15, position: 1 },
        { workout_exercise_id: 20, reps: 15, position: 2 },
        { workout_exercise_id: 20, reps: 15, position: 3 },
        { workout_exercise_id: 20, reps: 15, position: 4 },
        { workout_exercise_id: 20, reps: 15, position: 5 },

        { workout_exercise_id: 21, reps: 15, position: 1 },
        { workout_exercise_id: 21, reps: 15, position: 2 },
        { workout_exercise_id: 21, reps: 15, position: 3 },
        { workout_exercise_id: 21, reps: 15, position: 4 },
        { workout_exercise_id: 21, reps: 15, position: 5 },

        {
          workout_exercise_id: 22,
          duration: '12 seconds',
          position: 1,
        },
        {
          workout_exercise_id: 22,
          duration: '12 seconds',
          position: 2,
        },
        {
          workout_exercise_id: 22,
          duration: '12 seconds',
          position: 3,
        },
        {
          workout_exercise_id: 22,
          duration: '12 seconds',
          position: 4,
        },
        {
          workout_exercise_id: 22,
          duration: '12 seconds',
          position: 5,
        },

        { workout_exercise_id: 23, reps: 12, position: 1 },
        { workout_exercise_id: 23, reps: 12, position: 2 },
        { workout_exercise_id: 23, reps: 12, position: 3 },
        { workout_exercise_id: 23, reps: 12, position: 4 },
        { workout_exercise_id: 23, reps: 12, position: 5 },

        { workout_exercise_id: 24, reps: 8, position: 1 },
        { workout_exercise_id: 24, reps: 8, position: 2 },
        { workout_exercise_id: 24, reps: 8, position: 3 },
        { workout_exercise_id: 24, reps: 8, position: 4 },
        { workout_exercise_id: 24, reps: 8, position: 5 },

        { workout_exercise_id: 25, reps: 10, position: 1 },
        { workout_exercise_id: 25, reps: 10, position: 2 },
        { workout_exercise_id: 25, reps: 10, position: 3 },
        { workout_exercise_id: 25, reps: 10, position: 4 },
        { workout_exercise_id: 25, reps: 10, position: 5 },

        { workout_exercise_id: 26, reps: 0, position: 1 },
        { workout_exercise_id: 26, reps: 0, position: 2 },
        { workout_exercise_id: 26, reps: 0, position: 3 },
        { workout_exercise_id: 26, reps: 0, position: 4 },
        { workout_exercise_id: 26, reps: 0, position: 5 },

        // Back, Traps, And Core Routine
        { workout_exercise_id: 27, reps: 12, position: 1 },
        { workout_exercise_id: 27, reps: 10, position: 2 },
        { workout_exercise_id: 27, reps: 8, position: 3 },
        { workout_exercise_id: 27, reps: 6, position: 4 },
        { workout_exercise_id: 27, reps: 4, position: 5 },

        { workout_exercise_id: 28, reps: 12, position: 1 },
        { workout_exercise_id: 28, reps: 10, position: 2 },
        { workout_exercise_id: 28, reps: 8, position: 3 },
        { workout_exercise_id: 28, reps: 6, position: 4 },
        { workout_exercise_id: 28, reps: 4, position: 5 },

        { workout_exercise_id: 29, reps: 15, position: 1 },
        { workout_exercise_id: 29, reps: 15, position: 2 },
        { workout_exercise_id: 29, reps: 15, position: 3 },
        { workout_exercise_id: 29, reps: 15, position: 4 },
        { workout_exercise_id: 29, reps: 15, position: 5 },
        {
          workout_exercise_id: 30,
          duration: '15 seconds',
          position: 1,
        },
        {
          workout_exercise_id: 30,
          duration: '15 seconds',
          position: 1,
        },
        {
          workout_exercise_id: 30,
          duration: '15 seconds',
          position: 1,
        },
        {
          workout_exercise_id: 30,
          duration: '15 seconds',
          position: 1,
        },
        {
          workout_exercise_id: 30,
          duration: '15 seconds',
          position: 1,
        },
        { workout_exercise_id: 31, reps: 12, position: 1 },
        { workout_exercise_id: 31, reps: 12, position: 2 },
        { workout_exercise_id: 31, reps: 12, position: 3 },
        { workout_exercise_id: 31, reps: 12, position: 4 },

        { workout_exercise_id: 32, reps: 12, position: 1 },
        { workout_exercise_id: 32, reps: 12, position: 2 },
        { workout_exercise_id: 32, reps: 12, position: 3 },
        { workout_exercise_id: 32, reps: 12, position: 4 },

        { workout_exercise_id: 33, reps: 15, position: 1 },
        { workout_exercise_id: 33, reps: 15, position: 2 },
        { workout_exercise_id: 33, reps: 15, position: 3 },
        { workout_exercise_id: 33, reps: 15, position: 4 },

        { workout_exercise_id: 34, reps: 15, position: 1 },
        { workout_exercise_id: 34, reps: 15, position: 2 },
        { workout_exercise_id: 34, reps: 15, position: 3 },
        { workout_exercise_id: 34, reps: 15, position: 4 },

        { workout_exercise_id: 35, reps: 12, position: 1 },
        { workout_exercise_id: 35, reps: 12, position: 2 },
        { workout_exercise_id: 35, reps: 10, position: 3 },
        { workout_exercise_id: 35, reps: 10, position: 4 },
        { workout_exercise_id: 35, reps: 8, position: 5 },

        { workout_exercise_id: 36, reps: 0, position: 1 },
        { workout_exercise_id: 36, reps: 0, position: 2 },
        { workout_exercise_id: 36, reps: 0, position: 3 },
        { workout_exercise_id: 36, reps: 0, position: 4 },

        { workout_exercise_id: 37, reps: 0, position: 1 },
        { workout_exercise_id: 37, reps: 0, position: 2 },
        { workout_exercise_id: 37, reps: 0, position: 3 },
        { workout_exercise_id: 37, reps: 0, position: 4 },

        // Lower-Body Blast
        { workout_exercise_id: 38, reps: 12, position: 1 },
        { workout_exercise_id: 38, reps: 11, position: 2 },
        { workout_exercise_id: 38, reps: 10, position: 3 },

        { workout_exercise_id: 39, reps: 12, position: 1 },
        { workout_exercise_id: 39, reps: 11, position: 2 },
        { workout_exercise_id: 39, reps: 10, position: 3 },

        { workout_exercise_id: 40, reps: 10, position: 1 },
        { workout_exercise_id: 40, reps: 10, position: 2 },
        { workout_exercise_id: 40, reps: 10, position: 3 },
        { workout_exercise_id: 40, reps: 10, position: 4 },

        {
          workout_exercise_id: 41,
          duration: '8 seconds',
          position: 1,
        },
        {
          workout_exercise_id: 41,
          duration: '8 seconds',
          position: 2,
        },
        {
          workout_exercise_id: 41,
          duration: '8 seconds',
          position: 3,
        },
        {
          workout_exercise_id: 41,
          duration: '8 seconds',
          position: 4,
        },

        { workout_exercise_id: 42, reps: 12, position: 1 },
        { workout_exercise_id: 42, reps: 12, position: 2 },
        { workout_exercise_id: 42, reps: 12, position: 3 },
        { workout_exercise_id: 42, reps: 12, position: 4 },

        { workout_exercise_id: 43, reps: 10, position: 1 },
        { workout_exercise_id: 43, reps: 10, position: 2 },
        { workout_exercise_id: 43, reps: 10, position: 3 },
        { workout_exercise_id: 43, reps: 10, position: 4 },

        { workout_exercise_id: 44, reps: 10, position: 1 },
        { workout_exercise_id: 44, reps: 10, position: 2 },
        { workout_exercise_id: 44, reps: 10, position: 3 },

        { workout_exercise_id: 45, reps: 10, position: 1 },
        { workout_exercise_id: 45, reps: 10, position: 2 },
        { workout_exercise_id: 45, reps: 10, position: 3 },

        { workout_exercise_id: 46, reps: 8, position: 1 },
        { workout_exercise_id: 46, reps: 8, position: 2 },
        { workout_exercise_id: 46, reps: 8, position: 3 },
      ]);
    });
};
