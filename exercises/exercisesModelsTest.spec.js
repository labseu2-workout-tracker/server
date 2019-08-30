const exercise = require('./exercisesModels');

describe('get single exercise', () => {
  it('is able to get a single exercise by ID from the db!', async () => {
    const singleExercise = await exercise.findExerciseById('799');
    expect(singleExercise.id).toBe(799);
    expect(singleExercise.exercise_name).toBe('Knee Across The Body');
  });
});
