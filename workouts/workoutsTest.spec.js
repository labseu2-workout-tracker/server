const request = require('supertest');
const server = require('../index');

let token;
describe('Workouts', () => {
  beforeAll(done => {
    request(server)
      .post('/auth/signup')
      .send({
        email: 'montypython@example.com',
        username: 'montypython',
        password: '123456',
      })
      .end((err, res) => {
        token = res.body.token;
        done();
      });
  });

  describe('[/get] workouts', () => {
    it('should return 200 and all workouts', () => {
      return request(server)
        .get('/workouts')
        .set('Authorization', `Bearer ${token}`)
        .then(res => {
          expect(res.statusCode).toBe(200);
        });
    });
  });

  describe('[/get] workouts', () => {
    it('should return  400 when token is not provided ', () => {
      return request(server)
        .get('/workouts')
        .then(res => {
          expect(res.statusCode).toBe(400);
        });
    });
  });

  describe('[/get] workouts', () => {
    it('should return 401 when invalid token is provided', () => {
      token = 'mhvhgjbhjkljkn098765754667854565';
      return request(server)
        .get('/workouts')
        .set('Authorization', `Bearer ${token}`)
        .then(res => {
          expect(res.statusCode).toBe(401);
        });
    });
  });
});
