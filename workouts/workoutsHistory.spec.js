const request = require('supertest');

const server = require('../index');

describe('GET /workouthistory/:id', () => {
  it('Should response with 200 status code and json object containing exercise detail in full', async () => {
    const res = await request(server).get('/workoutshistory/1');
    expect(res.status).toBe(200);
    expect(res.type).toBe('application/json');
    expect(res.body).toBeInstanceOf(Object);
  });
});
