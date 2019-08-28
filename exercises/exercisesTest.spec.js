const request = require('supertest');

const server = require('../index');

describe('exercise-router', () => {
  describe('/get/exercise/:id', () => {
    it('should return status code OK 200 from get name route and full exercise response in json format in body', async () => {
      await request(server)
        .get('/exercises/500')
        .expect(200);
    });
  });
});
