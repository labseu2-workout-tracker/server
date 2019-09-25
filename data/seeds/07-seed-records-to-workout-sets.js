const db = require('../dbConfig');

exports.seed = function(knex) {
  return knex('workouts-exercises')
    .del()
    .then(async function() {
      const chestShoulder = await db('workouts')
        .select('id')
        .where('workout_name', '=', 'Chest and Shoulder Smackdown')
        .first();
      const fullBody = await db('workouts')
        .select('id')
        .where('workout_name', '=', 'Full-Body Circuit')
        .first();
      const armBlast = await db('workouts')
        .select('id')
        .where('workout_name', '=', 'Arm-Blast')
        .first();
      const backCore = await db('workouts')
        .select('id')
        .where('workout_name', '=', 'Back, Traps, And Core Routine')
        .first();
      const lowerBody = await db('workouts')
        .select('id')
        .where('workout_name', '=', 'Lower-Body Blast')
        .first();
      const upperChest = await db('workouts')
        .select('id')
        .where('workout_name', '=', 'Upper-Chest')
        .first();
      return knex('workout-sets').insert([
        // Exercises and sets for Chest and Shoulder Smackdown
        // ===> Exercise 1 <=== //
        // ==> Set 1
        {
          exercise_id: 33,
          workout_id: chestShoulder.id,
          reps: 10,
          position: 1,
        },
        // ==> Set 2
        {
          exercise_id: 33,
          workout_id: chestShoulder.id,
          reps: 8,
          position: 2,
        },
        // ==> Set 3
        {
          exercise_id: 33,
          workout_id: chestShoulder.id,
          reps: 8,
          position: 3,
        },
        // ==> Set 4
        {
          exercise_id: 33,
          workout_id: chestShoulder.id,
          reps: 6,
          position: 4,
        },

        // ===> Exercise 2 <=== //
        // ==> Set 1
        {
          exercise_id: 4,
          workout_id: chestShoulder.id,
          reps: 12,
          position: 1,
        },
        // ==> Set 2
        {
          exercise_id: 4,
          workout_id: chestShoulder.id,
          reps: 12,
          position: 2,
        },
        // ==> Set 3
        {
          exercise_id: 4,
          workout_id: chestShoulder.id,
          reps: 10,
          position: 3,
        },
        // ==> Set 4
        {
          exercise_id: 4,
          workout_id: chestShoulder.id,
          reps: 10,
          position: 4,
        },

        // ===> Exercise 3 <=== //
        // ==> Set 1
        {
          exercise_id: 1,
          workout_id: chestShoulder.id,
          reps: 12,
          position: 1,
        },
        // ==> Set 2
        {
          exercise_id: 1,
          workout_id: chestShoulder.id,
          reps: 11,
          position: 2,
        },
        // ==> Set 3
        {
          exercise_id: 1,
          workout_id: chestShoulder.id,
          reps: 10,
          position: 3,
        },

        // ===> Exercise 4 <=== //
        // ==> Set 1
        {
          exercise_id: 665,
          workout_id: chestShoulder.id,
          reps: 8,
          position: 1,
        },
        // ==> Set 2
        {
          exercise_id: 665,
          workout_id: chestShoulder.id,
          reps: 8,
          position: 2,
        },
        // ==> Set 3
        {
          exercise_id: 665,
          workout_id: chestShoulder.id,
          reps: 8,
          position: 3,
        },

        // ===> Exercise 5 <=== //
        // ==> Set 1
        {
          exercise_id: 698,
          workout_id: chestShoulder.id,
          reps: 10,
          position: 1,
        },
        // ==> Set 2
        {
          exercise_id: 698,
          workout_id: chestShoulder.id,
          reps: 10,
          position: 2,
        },
        // ==> Set 3
        {
          exercise_id: 698,
          workout_id: chestShoulder.id,
          reps: 10,
          position: 3,
        },

        // ===> Exercise 6 <=== //
        // ==> Set 1
        {
          exercise_id: 706,
          workout_id: chestShoulder.id,
          reps: 10,
          position: 1,
        },
        // ==> Set 2
        {
          exercise_id: 706,
          workout_id: chestShoulder.id,
          reps: 10,
          position: 2,
        },
        // ==> Set 3
        {
          exercise_id: 706,
          workout_id: chestShoulder.id,
          reps: 10,
          position: 3,
        },

        // Exercises and sets for Full Body Circuit
        // ===> Exercise 1 <=== //
        // ==> Set 1
        {
          exercise_id: 282,
          workout_id: fullBody.id,
          reps: 15,
          position: 1,
        },
        // ==> Set 2
        {
          exercise_id: 282,
          workout_id: fullBody.id,
          reps: 15,
          position: 2,
        },
        // ==> Set 3
        {
          exercise_id: 282,
          workout_id: fullBody.id,
          reps: 15,
          position: 3,
        },

        // ===> Exercise 2 <=== //
        // ==> Set 1
        {
          exercise_id: 308,
          workout_id: fullBody.id,
          reps: 10,
          position: 1,
        },
        // ==> Set 2
        {
          exercise_id: 308,
          workout_id: fullBody.id,
          reps: 10,
          position: 2,
        },
        // ==> Set 3
        {
          exercise_id: 308,
          workout_id: fullBody.id,
          reps: 10,
          position: 3,
        },

        // ===> Exercise 3 <=== //
        // ==> Set 1
        {
          exercise_id: 447,
          workout_id: fullBody.id,
          reps: 15,
          position: 1,
        },
        // ==> Set 2
        {
          exercise_id: 447,
          workout_id: fullBody.id,
          reps: 15,
          position: 2,
        },
        // ==> Set 3
        {
          exercise_id: 447,
          workout_id: fullBody.id,
          reps: 15,
          position: 3,
        },

        // ===> Exercise 4 <=== //
        // ==> Set 1
        {
          exercise_id: 738,
          workout_id: fullBody.id,
          reps: 30,
          position: 1,
        },
        // ==> Set 2
        {
          exercise_id: 738,
          workout_id: fullBody.id,
          reps: 30,
          position: 2,
        },
        // ==> Set 3
        {
          exercise_id: 738,
          workout_id: fullBody.id,
          reps: 30,
          position: 3,
        },

        // ===> Exercise 5 <=== //
        // ==> Set 1
        {
          exercise_id: 337,
          workout_id: fullBody.id,
          duration: '20 seconds',
          position: 1,
        },
        // ==> Set 2
        {
          exercise_id: 337,
          workout_id: fullBody.id,
          duration: '20 seconds',
          position: 2,
        },
        // ==> Set 3
        {
          exercise_id: 337,
          workout_id: fullBody.id,
          duration: '20 seconds',
          position: 3,
        },

        // ===> Exercise 6 <=== //
        // ==> Set 1
        {
          exercise_id: 371,
          workout_id: fullBody.id,
          reps: 10,
          position: 1,
        },
        // ==> Set 2
        {
          exercise_id: 371,
          workout_id: fullBody.id,
          reps: 10,
          position: 2,
        },
        // ==> Set 3
        {
          exercise_id: 371,
          workout_id: fullBody.id,
          reps: 10,
          position: 3,
        },

        // ===> Exercise 7 <=== //
        // ==> Set 1
        {
          exercise_id: 315,
          workout_id: fullBody.id,
          reps: 10,
          position: 1,
        },
        // ==> Set 2
        {
          exercise_id: 315,
          workout_id: fullBody.id,
          reps: 10,
          position: 2,
        },
        // ==> Set 3
        {
          exercise_id: 315,
          workout_id: fullBody.id,
          reps: 10,
          position: 3,
        },

        // ===> Exercise 8 <=== //
        // ==> Set 1
        {
          exercise_id: 711,
          workout_id: fullBody.id,
          duration: '60 seconds',
          position: 1,
        },
        // ==> Set 2
        {
          exercise_id: 711,
          workout_id: fullBody.id,
          duration: '60 seconds',
          position: 2,
        },
        // ==> Set 3
        {
          exercise_id: 711,
          workout_id: fullBody.id,
          duration: '60 seconds',
          position: 3,
        },

        // Exercises for Arm Blast

        // ===> Exercise 1 <=== //
        // ==> Set 1
        {
          exercise_id: 815,
          workout_id: armBlast.id,
          reps: 12,
          position: 1,
        },
        // ==> Set 2
        {
          exercise_id: 815,
          workout_id: armBlast.id,
          reps: 10,
          position: 2,
        },
        // ==> Set 3
        {
          exercise_id: 815,
          workout_id: armBlast.id,
          reps: 8,
          position: 3,
        },
        // ==> Set 4
        {
          exercise_id: 815,
          workout_id: armBlast.id,
          reps: 6,
          position: 4,
        },
        // ==> Set 5
        {
          exercise_id: 815,
          workout_id: armBlast.id,
          reps: 4,
          position: 5,
        },

        // ===> Exercise 2 <=== //
        // ==> Set 1
        {
          exercise_id: 575,
          workout_id: armBlast.id,
          reps: 12,
          position: 1,
        },
        // ==> Set 2
        {
          exercise_id: 575,
          workout_id: armBlast.id,
          reps: 10,
          position: 2,
        },
        // ==> Set 3
        {
          exercise_id: 575,
          workout_id: armBlast.id,
          reps: 8,
          position: 3,
        },
        // ==> Set 4
        {
          exercise_id: 575,
          workout_id: armBlast.id,
          reps: 6,
          position: 4,
        },
        // ==> Set 5
        {
          exercise_id: 575,
          workout_id: armBlast.id,
          reps: 4,
          position: 5,
        },

        // ===> Exercise 3 <=== //
        // ==> Set 1
        {
          exercise_id: 594,
          workout_id: armBlast.id,
          reps: 15,
          position: 1,
        },
        // ==> Set 2
        {
          exercise_id: 594,
          workout_id: armBlast.id,
          reps: 15,
          position: 2,
        },
        // ==> Set 3
        {
          exercise_id: 594,
          workout_id: armBlast.id,
          reps: 15,
          position: 3,
        },
        // ==> Set 4
        {
          exercise_id: 594,
          workout_id: armBlast.id,
          reps: 15,
          position: 4,
        },
        // ==> Set 5
        {
          exercise_id: 594,
          workout_id: armBlast.id,
          reps: 15,
          position: 5,
        },

        // ===> Exercise 4 <=== //
        // ==> Set 1
        {
          exercise_id: 836,
          workout_id: armBlast.id,
          reps: 15,
          position: 1,
        },
        // ==> Set 2
        {
          exercise_id: 836,
          workout_id: armBlast.id,
          reps: 15,
          position: 2,
        },
        // ==> Set 3
        {
          exercise_id: 836,
          workout_id: armBlast.id,
          reps: 15,
          position: 3,
        },
        // ==> Set 4
        {
          exercise_id: 836,
          workout_id: armBlast.id,
          reps: 15,
          position: 4,
        },
        // ==> Set 5
        {
          exercise_id: 836,
          workout_id: armBlast.id,
          reps: 15,
          position: 5,
        },

        // ===> Exercise 5 <=== //
        // ==> Set 1
        {
          exercise_id: 811,
          workout_id: armBlast.id,
          duration: '12 seconds',
          position: 1,
        },
        // ==> Set 2
        {
          exercise_id: 811,
          workout_id: armBlast.id,
          duration: '12 seconds',
          position: 2,
        },
        // ==> Set 3
        {
          exercise_id: 811,
          workout_id: armBlast.id,
          duration: '12 seconds',
          position: 3,
        },
        // ==> Set 4
        {
          exercise_id: 811,
          workout_id: armBlast.id,
          duration: '12 seconds',
          position: 4,
        },
        // ==> Set 5
        {
          exercise_id: 811,
          workout_id: armBlast.id,
          duration: '12 seconds',
          position: 5,
        },

        // ===> Exercise 6 <=== //
        // ==> Set 1
        {
          exercise_id: 579,
          workout_id: armBlast.id,
          reps: 12,
          position: 1,
        },
        // ==> Set 2
        {
          exercise_id: 579,
          workout_id: armBlast.id,
          reps: 12,
          position: 2,
        },
        // ==> Set 3
        {
          exercise_id: 579,
          workout_id: armBlast.id,
          reps: 12,
          position: 3,
        },
        // ==> Set 4
        {
          exercise_id: 579,
          workout_id: armBlast.id,
          reps: 12,
          position: 4,
        },
        // ==> Set 5
        {
          exercise_id: 579,
          workout_id: armBlast.id,
          reps: 12,
          position: 5,
        },

        // ===> Exercise 7 <=== //
        // ==> Set 1
        {
          exercise_id: 125,
          workout_id: armBlast.id,
          reps: 8,
          position: 1,
        },
        // ==> Set 2
        {
          exercise_id: 125,
          workout_id: armBlast.id,
          reps: 8,
          position: 2,
        },
        // ==> Set 3
        {
          exercise_id: 125,
          workout_id: armBlast.id,
          reps: 8,
          position: 3,
        },
        // ==> Set 4
        {
          exercise_id: 125,
          workout_id: armBlast.id,
          reps: 8,
          position: 4,
        },
        // ==> Set 5
        {
          exercise_id: 125,
          workout_id: armBlast.id,
          reps: 8,
          position: 5,
        },

        // ===> Exercise 8 <=== //
        // ==> Set 1
        {
          exercise_id: 838,
          workout_id: armBlast.id,
          reps: 10,
          position: 1,
        },
        // ==> Set 2
        {
          exercise_id: 838,
          workout_id: armBlast.id,
          reps: 10,
          position: 2,
        },
        // ==> Set 3
        {
          exercise_id: 838,
          workout_id: armBlast.id,
          reps: 10,
          position: 3,
        },
        // ==> Set 4
        {
          exercise_id: 838,
          workout_id: armBlast.id,
          reps: 10,
          position: 4,
        },
        // ==> Set 5
        {
          exercise_id: 838,
          workout_id: armBlast.id,
          reps: 10,
          position: 5,
        },

        // ===> Exercise 9 <=== //
        // ==> Set 1
        {
          exercise_id: 90,
          workout_id: armBlast.id,
          reps: 0,
          position: 1,
        },
        // ==> Set 2
        {
          exercise_id: 90,
          workout_id: armBlast.id,
          reps: 0,
          position: 2,
        },
        // ==> Set 3
        {
          exercise_id: 90,
          workout_id: armBlast.id,
          reps: 0,
          position: 3,
        },
        // ==> Set 4
        {
          exercise_id: 90,
          workout_id: armBlast.id,
          reps: 0,
          position: 4,
        },
        // ==> Set 5
        {
          exercise_id: 90,
          workout_id: armBlast.id,
          reps: 0,
          position: 5,
        },

        // Exercises for Back, Traps and Core Routine
        // ===> Exercise 1 <=== //
        // ==> Set 1
        {
          exercise_id: 498,
          workout_id: backCore.id,
          reps: 12,
          position: 1,
        },
        // ==> Set 2
        {
          exercise_id: 498,
          workout_id: backCore.id,
          reps: 10,
          position: 2,
        },
        // ==> Set 3
        {
          exercise_id: 498,
          workout_id: backCore.id,
          reps: 8,
          position: 3,
        },
        // ==> Set 4
        {
          exercise_id: 498,
          workout_id: backCore.id,
          reps: 6,
          position: 4,
        },
        // ==> Set 5
        {
          exercise_id: 498,
          workout_id: backCore.id,
          reps: 4,
          position: 5,
        },

        // ===> Exercise 2 <=== //
        // ==> Set 1
        {
          exercise_id: 147,
          workout_id: backCore.id,
          reps: 12,
          position: 1,
        },
        // ==> Set 2
        {
          exercise_id: 147,
          workout_id: backCore.id,
          reps: 10,
          position: 2,
        },
        // ==> Set 3
        {
          exercise_id: 147,
          workout_id: backCore.id,
          reps: 8,
          position: 3,
        },
        // ==> Set 4
        {
          exercise_id: 147,
          workout_id: backCore.id,
          reps: 6,
          position: 4,
        },
        // ==> Set 5
        {
          exercise_id: 147,
          workout_id: backCore.id,
          reps: 4,
          position: 5,
        },

        // ===> Exercise 3 <=== //
        // ==> Set 1
        {
          exercise_id: 153,
          workout_id: backCore.id,
          reps: 15,
          position: 1,
        },
        // ==> Set 2
        {
          exercise_id: 153,
          workout_id: backCore.id,
          reps: 15,
          position: 2,
        },
        // ==> Set 3
        {
          exercise_id: 153,
          workout_id: backCore.id,
          reps: 15,
          position: 3,
        },
        // ==> Set 4
        {
          exercise_id: 153,
          workout_id: backCore.id,
          reps: 15,
          position: 4,
        },
        // ==> Set 5
        {
          exercise_id: 153,
          workout_id: backCore.id,
          reps: 15,
          position: 5,
        },

        // ===> Exercise 4 <=== //
        // ==> Set 1
        {
          exercise_id: 194,
          workout_id: backCore.id,
          duration: '15 seconds',
          position: 1,
        },
        // ==> Set 2
        {
          exercise_id: 194,
          workout_id: backCore.id,
          duration: '15 seconds',
          position: 1,
        },
        // ==> Set 3
        {
          exercise_id: 194,
          workout_id: backCore.id,
          duration: '15 seconds',
          position: 1,
        },
        // ==> Set 4
        {
          exercise_id: 194,
          workout_id: backCore.id,
          duration: '15 seconds',
          position: 1,
        },
        // ==> Set 5
        {
          exercise_id: 194,
          workout_id: backCore.id,
          duration: '15 seconds',
          position: 1,
        },

        // ===> Exercise 5 <=== //
        // ==> Set 1
        {
          exercise_id: 208,
          workout_id: backCore.id,
          reps: 12,
          position: 1,
        },
        // ==> Set 2
        {
          exercise_id: 208,
          workout_id: backCore.id,
          reps: 12,
          position: 2,
        },
        // ==> Set 3
        {
          exercise_id: 208,
          workout_id: backCore.id,
          reps: 12,
          position: 3,
        },
        // ==> Set 4
        {
          exercise_id: 208,
          workout_id: backCore.id,
          reps: 12,
          position: 4,
        },

        // ===> Exercise 6 <=== //
        // ==> Set 1
        {
          exercise_id: 158,
          workout_id: backCore.id,
          reps: 12,
          position: 1,
        },
        // ==> Set 2
        {
          exercise_id: 158,
          workout_id: backCore.id,
          reps: 12,
          position: 2,
        },
        // ==> Set 3
        {
          exercise_id: 158,
          workout_id: backCore.id,
          reps: 12,
          position: 3,
        },
        // ==> Set 4
        {
          exercise_id: 158,
          workout_id: backCore.id,
          reps: 12,
          position: 4,
        },

        // ===> Exercise 7 <=== //
        // ==> Set 1
        {
          exercise_id: 148,
          workout_id: backCore.id,
          reps: 15,
          position: 1,
        },
        // ==> Set 2
        {
          exercise_id: 148,
          workout_id: backCore.id,
          reps: 15,
          position: 2,
        },
        // ==> Set 3
        {
          exercise_id: 148,
          workout_id: backCore.id,
          reps: 15,
          position: 3,
        },
        // ==> Set 4
        {
          exercise_id: 148,
          workout_id: backCore.id,
          reps: 15,
          position: 4,
        },

        // ===> Exercise 8 <=== //
        // ==> Set 1
        {
          exercise_id: 188,
          workout_id: backCore.id,
          reps: 15,
          position: 1,
        },
        // ==> Set 3
        {
          exercise_id: 188,
          workout_id: backCore.id,
          reps: 15,
          position: 2,
        },
        // ==> Set 4
        {
          exercise_id: 188,
          workout_id: backCore.id,
          reps: 15,
          position: 3,
        },
        // ==> Set 5
        {
          exercise_id: 188,
          workout_id: backCore.id,
          reps: 15,
          position: 4,
        },

        // ===> Exercise 9 <=== //
        // ==> Set 1
        {
          exercise_id: 650,
          workout_id: backCore.id,
          reps: 12,
          position: 1,
        },
        // ==> Set 2
        {
          exercise_id: 650,
          workout_id: backCore.id,
          reps: 12,
          position: 2,
        },
        // ==> Set 3
        {
          exercise_id: 650,
          workout_id: backCore.id,
          reps: 10,
          position: 3,
        },
        // ==> Set 4
        {
          exercise_id: 650,
          workout_id: backCore.id,
          reps: 10,
          position: 4,
        },
        // ==> Set 5
        {
          exercise_id: 650,
          workout_id: backCore.id,
          reps: 8,
          position: 5,
        },

        // ===> Exercise 10 <=== //
        // ==> Set 1
        {
          exercise_id: 732,
          workout_id: backCore.id,
          reps: 0,
          position: 1,
        },
        // ==> Set 2
        {
          exercise_id: 732,
          workout_id: backCore.id,
          reps: 0,
          position: 2,
        },
        // ==> Set 3
        {
          exercise_id: 732,
          workout_id: backCore.id,
          reps: 0,
          position: 3,
        },
        // ==> Set 4
        {
          exercise_id: 732,
          workout_id: backCore.id,
          reps: 0,
          position: 4,
        },

        // ===> Exercise 11 <=== //
        // ==> Set 1
        {
          exercise_id: 724,
          workout_id: backCore.id,
          reps: 0,
          position: 1,
        },
        // ==> Set 2
        {
          exercise_id: 724,
          workout_id: backCore.id,
          reps: 0,
          position: 2,
        },
        // ==> Set 3
        {
          exercise_id: 724,
          workout_id: backCore.id,
          reps: 0,
          position: 3,
        },
        // ==> Set 4
        {
          exercise_id: 724,
          workout_id: backCore.id,
          reps: 0,
          position: 4,
        },

        // Exercises for Lower-Body Blast
        // ===> Exercise 1 <=== //
        // ==> Set 1
        {
          exercise_id: 516,
          workout_id: lowerBody.id,
          reps: 12,
          position: 1,
        },
        // ==> Set 2
        {
          exercise_id: 516,
          workout_id: lowerBody.id,
          reps: 11,
          position: 2,
        },
        // ==> Set 3
        {
          exercise_id: 516,
          workout_id: lowerBody.id,
          reps: 10,
          position: 3,
        },

        // ===> Exercise 2 <=== //
        // ==> Set 1
        {
          exercise_id: 235,
          workout_id: lowerBody.id,
          reps: 12,
          position: 1,
        },
        // ==> Set 2
        {
          exercise_id: 235,
          workout_id: lowerBody.id,
          reps: 11,
          position: 2,
        },
        // ==> Set 3
        {
          exercise_id: 235,
          workout_id: lowerBody.id,
          reps: 10,
          position: 3,
        },

        // ===> Exercise 3 <=== //
        // ==> Set 1
        {
          exercise_id: 538,
          workout_id: lowerBody.id,
          reps: 10,
          position: 1,
        },
        // ==> Set 2
        {
          exercise_id: 538,
          workout_id: lowerBody.id,
          reps: 10,
          position: 2,
        },
        // ==> Set 3
        {
          exercise_id: 538,
          workout_id: lowerBody.id,
          reps: 10,
          position: 3,
        },
        // ==> Set 4
        {
          exercise_id: 538,
          workout_id: lowerBody.id,
          reps: 10,
          position: 4,
        },

        // ===> Exercise 4 <=== //
        // ==> Set 1
        {
          exercise_id: 782,
          workout_id: lowerBody.id,
          duration: '8 seconds',
          position: 1,
        },
        // ==> Set 2
        {
          exercise_id: 782,
          workout_id: lowerBody.id,
          duration: '8 seconds',
          position: 2,
        },
        // ==> Set 3
        {
          exercise_id: 782,
          workout_id: lowerBody.id,
          duration: '8 seconds',
          position: 3,
        },
        // ==> Set 4
        {
          exercise_id: 782,
          workout_id: lowerBody.id,
          duration: '8 seconds',
          position: 4,
        },

        // ===> Exercise 5 <=== //
        // ==> Set 1
        {
          exercise_id: 785,
          workout_id: lowerBody.id,
          reps: 12,
          position: 1,
        },
        // ==> Set 2
        {
          exercise_id: 785,
          workout_id: lowerBody.id,
          reps: 12,
          position: 2,
        },
        // ==> Set 3
        {
          exercise_id: 785,
          workout_id: lowerBody.id,
          reps: 12,
          position: 3,
        },
        // ==> Set 4
        {
          exercise_id: 785,
          workout_id: lowerBody.id,
          reps: 12,
          position: 4,
        },

        // ===> Exercise 6 <=== //
        // ==> Set 1
        {
          exercise_id: 524,
          workout_id: lowerBody.id,
          reps: 10,
          position: 1,
        },
        // ==> Set 2
        {
          exercise_id: 524,
          workout_id: lowerBody.id,
          reps: 10,
          position: 2,
        },
        // ==> Set 3
        {
          exercise_id: 524,
          workout_id: lowerBody.id,
          reps: 10,
          position: 3,
        },
        // ==> Set 4
        {
          exercise_id: 524,
          workout_id: lowerBody.id,
          reps: 10,
          position: 4,
        },

        // ===> Exercise 7 <=== //
        // ==> Set 1
        {
          exercise_id: 437,
          workout_id: lowerBody.id,
          reps: 10,
          position: 1,
        },
        // ==> Set 2
        {
          exercise_id: 437,
          workout_id: lowerBody.id,
          reps: 10,
          position: 2,
        },
        // ==> Set 3
        {
          exercise_id: 437,
          workout_id: lowerBody.id,
          reps: 10,
          position: 3,
        },

        // ===> Exercise 8 <=== //
        // ==> Set 1
        {
          exercise_id: 344,
          workout_id: lowerBody.id,
          reps: 10,
          position: 1,
        },
        // ==> Set 2
        {
          exercise_id: 344,
          workout_id: lowerBody.id,
          reps: 10,
          position: 2,
        },
        // ==> Set 3
        {
          exercise_id: 344,
          workout_id: lowerBody.id,
          reps: 10,
          position: 3,
        },

        // ===> Exercise 9 <=== //
        // ==> Set 1
        {
          exercise_id: 530,
          workout_id: lowerBody.id,
          reps: 8,
          position: 1,
        },
        // ==> Set 2
        {
          exercise_id: 530,
          workout_id: lowerBody.id,
          reps: 8,
          position: 2,
        },
        // ==> Set 3
        {
          exercise_id: 530,
          workout_id: lowerBody.id,
          reps: 8,
          position: 3,
        },
        //-------------Upper-chest exercise-------------------
        //------------first set-------------------------------
        {
          exercise_id: 16,
          workout_id: upperChest.id,
          reps: 12,
          position: 1,
        },
        {
          exercise_id: 55,
          workout_id: upperChest.id,
          reps: 12,
          position: 1,
        },
        {
          exercise_id: 31,
          workout_id: upperChest.id,
          position: 1,
        },

        // ------------second set---------------
         {
          exercise_id: 16,
          workout_id: upperChest.id,
          reps: 10,
          position: 2,
        },
        {
          exercise_id: 55,
          workout_id: upperChest.id,
          reps: 10,
          position: 2,
        },
        {
          exercise_id: 31,
          workout_id: upperChest.id,
          position: 2,
        },

        //---------third set--------
         {
          exercise_id: 16,
          workout_id: upperChest.id,
          reps: 8,
          position: 3,
        },
        {
          exercise_id: 55,
          workout_id: upperChest.id,
          reps: 8,
          position: 3,
        },
        {
          exercise_id: 31,
          workout_id: upperChest.id,
          position: 3,
        },
      ]);
    });
};
