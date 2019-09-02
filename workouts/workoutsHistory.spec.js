const request = require('supertest');

const server = require('../index');

const workoutHistory = require('../workouts/workoutsHistoryModels');

describe('GET /workouthistory/:id', () => {
  it('Should response with 200 status code and json object containing workout history detail in full up to last 10', async () => {
    const res = await request(server).get('/workouthistory/1');
    expect(res.status).toBe(200);
    expect(res.type).toBe('application/json');
    expect(res.body).toBeInstanceOf(Object);
  });
});

describe('get workoutHistory', () => {
  it('is able to get all workouthistory by User_ID from the db!', async () => {
    const history = await workoutHistory.getWorkoutHistory(1);
    expect(history[0].id).toBe(1);
    expect(history[0].workout_name).toBe('Legs');
  });
});
