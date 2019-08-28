const request = require('supertest');
const server = require('../index');

describe('Workouts', () => {
  describe('[/get] workouts', () => {
    it('should return all workouts', async () => {
      const workouts = await request(server).get('/workouts');
      expect(workouts.statusCode).toBe(200);
    });
  });
});
