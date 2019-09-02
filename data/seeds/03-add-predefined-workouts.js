exports.seed = function(knex) {
  return knex('workouts')
    .del()
    .then(function() {
      return knex('workouts').insert([
        {
          workout_name: 'Chest and Shoulder Smackdown',
          workout_description: `Use this in place of your regular chest-and-delt workout if you're in lean-out mode. While it's more like a standard muscle-building training routine, you'll rev up the fat-burn a bit when you keep your rest periods under 30 seconds.`,
          image_url:
            'https://www.bodybuilding.com/images/2018/april/5-workous-that-are-insanely-efficient-at-torching-fat-signature-4-700xh.jpg',
        },
        {
          workout_name: 'Full-Body Circuit',
          workout_description: `This workout will get you moving in multiple directions. It's not about focusing on one body part, it's about getting everything moving and working together to burn calories while building up strength endurance.`,
          image_url:
            'https://www.bodybuilding.com/images/2018/april/5-workous-that-are-insanely-efficient-at-torching-fat-signature-2-700xh.jpg',
        },
        {
          workout_name: 'Arm-Blast',
          workout_description: `Biceps, triceps, and forearms are smaller body parts, but you can still bump up your metabolism if you're lifting hard and pushing on your rest periods. Keep your rest to 30-60 seconds between sets.`,
          image_url:
            'https://www.bodybuilding.com/images/2018/april/5-workous-that-are-insanely-efficient-at-torching-fat-signature-3-700xh.jpg',
        },
        {
          workout_name: 'Back, Traps, And Core Routine',
          workout_description: `The back and core work synergistically, making them a good, dynamic muscle pairing for a high-energy-burn weight-training session. This workout is front-loaded with four back-focused supersets. Then, you'll switch and do traps and abs in a superset to wrap it up.`,
          image_url:
            'https://www.bodybuilding.com/images/2018/april/5-workous-that-are-insanely-efficient-at-torching-fat-signature-1-700xh.jpg',
        },
        {
          workout_name: 'Lower-Body Blast',
          workout_description: `The glutes and hamstrings are often a trouble spot for women, but guys can benefit from this workout, too.`,
          image_url:
            'https://www.bodybuilding.com/exercises/exerciseImages/sequences/4361/Female/l/4361_2.jpg',
        },
      ]);
    });
};
