const request = require('supertest');

const server = require('../index');

describe('GET /workouthistory/:id', () => {
  it('Should response with 200 status code and json object containing workout history detail in full up to last 10', async () => {
    const res = await request(server).get('/workouthistory/1');
    expect(res.status).toBe(200);
    expect(res.type).toBe('application/json');
    expect(res.body).toBeInstanceOf(Object);
  });
});
