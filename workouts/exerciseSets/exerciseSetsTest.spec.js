const request = require('supertest');
const server = require('../../index.js');

const demoSet = {
  workout_exercise_id: 1,
  reps: 12,
  weights: 71.8,
  duration: '15',
};

// a helper function to make a POST request
function post(url, body) {
  const httpRequest = request(server).post(url);
  httpRequest.send(body);
  httpRequest.set('Accept', 'application/json');
  httpRequest.set('Origin', 'http://localhost:5000');
  return httpRequest;
}

describe('create sets', () => {
  it('succeeds with correct body req', () => {
    post(`/workout_exercises/sets`, demoSet).expect(200);
  });
});
