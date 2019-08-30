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
      return knex('workouts-exercises').insert([
        // Exercises for Chest and Shoulder Smackdown
        {
          exercise_id: 33,
          workout_id: chestShoulder.id,
        },
        {
          exercise_id: 4,
          workout_id: chestShoulder.id,
        },
        {
          exercise_id: 1,
          workout_id: chestShoulder.id,
        },
        {
          exercise_id: 665,
          workout_id: chestShoulder.id,
        },
        {
          exercise_id: 698,
          workout_id: chestShoulder.id,
        },
        {
          exercise_id: 706,
          workout_id: chestShoulder.id,
        },
        // Exercises for Full Body Circuit
        {
          exercise_id: 282,
          workout_id: fullBody.id,
        },
        {
          exercise_id: 308,
          workout_id: fullBody.id,
        },
        {
          exercise_id: 447,
          workout_id: fullBody.id,
        },
        {
          exercise_id: 738,
          workout_id: fullBody.id,
        },
        {
          exercise_id: 337,
          workout_id: fullBody.id,
        },
        {
          exercise_id: 371,
          workout_id: fullBody.id,
        },
        {
          exercise_id: 315,
          workout_id: fullBody.id,
        },
        {
          exercise_id: 711,
          workout_id: fullBody.id,
        },
        // Exercises for Arm Blast
        {
          exercise_id: 815,
          workout_id: armBlast.id,
        },
        {
          exercise_id: 575,
          workout_id: armBlast.id,
        },
        {
          exercise_id: 594,
          workout_id: armBlast.id,
        },
        {
          exercise_id: 836,
          workout_id: armBlast.id,
        },
        {
          exercise_id: 811,
          workout_id: armBlast.id,
        },
        {
          exercise_id: 579,
          workout_id: armBlast.id,
        },
        {
          exercise_id: 125,
          workout_id: armBlast.id,
        },
        {
          exercise_id: 838,
          workout_id: armBlast.id,
        },
        {
          exercise_id: 90,
          workout_id: armBlast.id,
        },
        // Exercises for Back, Traps and Core Routine
        {
          exercise_id: 498,
          workout_id: backCore.id,
        },
        {
          exercise_id: 147,
          workout_id: backCore.id,
        },
        {
          exercise_id: 153,
          workout_id: backCore.id,
        },
        {
          exercise_id: 194,
          workout_id: backCore.id,
        },
        {
          exercise_id: 208,
          workout_id: backCore.id,
        },
        {
          exercise_id: 158,
          workout_id: backCore.id,
        },
        {
          exercise_id: 148,
          workout_id: backCore.id,
        },
        {
          exercise_id: 188,
          workout_id: backCore.id,
        },
        {
          exercise_id: 650,
          workout_id: backCore.id,
        },
        {
          exercise_id: 732,
          workout_id: backCore.id,
        },
        {
          exercise_id: 724,
          workout_id: backCore.id,
        },
        // Exercises for Lower-Body Blast
        {
          exercise_id: 516,
          workout_id: lowerBody.id,
        },
        {
          exercise_id: 235,
          workout_id: lowerBody.id,
        },
        {
          exercise_id: 538,
          workout_id: lowerBody.id,
        },
        {
          exercise_id: 782,
          workout_id: lowerBody.id,
        },
        {
          exercise_id: 785,
          workout_id: lowerBody.id,
        },
        {
          exercise_id: 524,
          workout_id: lowerBody.id,
        },
        {
          exercise_id: 437,
          workout_id: lowerBody.id,
        },
        {
          exercise_id: 344,
          workout_id: lowerBody.id,
        },
        {
          exercise_id: 530,
          workout_id: lowerBody.id,
        },
      ]);
    });
};
