const request = require('supertest');
const server = require('../index');

let token;
describe('Workouts', () => {
  beforeAll(done => {
    request(server)
      .post('/auth/login')
      .send({
        email: 'foobaz@gmail.com',
        password: '123456',
      })
      .end((err, res) => {
        token = res.body.token;
        done();
      });
  });

  describe('[/get] workouts', () => {
    it('should return all workouts', () => {
      return request(server)
        .get('/workouts')
        .set('Authorization', `Bearer ${token}`)
        .then(res => {
          expect(res.statusCode).toBe(200);
        });
    });
  });
});
