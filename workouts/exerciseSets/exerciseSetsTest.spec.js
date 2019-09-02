const request = require('supertest');
const server = require('../../index');


const setExample = {
  workout_exercise_id: 1,
  reps: 20,
  weights: 20.8,
  duration: '15',
};


function post(url, body) {
    const httpRequest = request(server).post(url);
    httpRequest.send(body);
    httpRequest.set('Accept', 'application/json');
    httpRequest.set('Origin', 'http://localhost:5000');
    return httpRequest;
  }

describe('Set post format', () => {
  it('should return 201 when a new set is created', async () => {
     post(`/workout_exercises/sets`, setExample).expect(201);
  });
});

// a helper function to make a POST request

