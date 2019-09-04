const request = require('supertest');
const server = require('../index');

let token;
describe('Workouts', () => {
  beforeAll(done => {
    request(server)
      .post('/auth/signup')
      .send({
        email: 'yusuf@example.com',
        username: 'yusuf',
        password: '123456',
      })
      .end((err, res) => {
        console.log(res.body);
        token = res.body.token;
        done();
      });
  });

  describe('GET /profile/:id - Get a user details', () => {
    it('should return a status of 200 with the details of the user profile', () => {
      return request(server)
        .get(`/profile`)
        .set('Authorization', `Bearer ${token}`)
        .then(res => {
          expect(res.statusCode).toBe(200);
          expect(res.body.user).toBeDefined();
        });
    });
    it('should return a status of 401 if invalid token', () => {
      const invalidToken = 'mhvhgjbhjkljkn098765754667854565';
      return request(server)
        .get(`/profile`)
        .set('Authorization', `Bearer ${invalidToken}`)
        .then(res => {
          expect(res.statusCode).toBe(401);
        });
    });
    it('should return a status of 400 if no token is provided', () => {
      return request(server)
        .get(`/profile`)
        .then(res => {
          expect(res.statusCode).toBe(400);
          expect(res.body.message).toBeDefined();
        });
    });
  });
});
