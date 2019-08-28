const request = require('supertest');
const server = require('../index');
const db = require('../data/dbConfig');

describe('authentication', () => {
  beforeAll(async () => {
    await db('users')
      .where('id', '>', '0')
      .del();
  });
  it('should return a status 200 when a user signs up', () => {
    return request(server)
      .post('/api/auth/signup')
      .send({
        username: 'Bar',
        email: 'foobaz@gmail.com',
        password: '123456',
      })
      .expect(201)
      .expect('Content-Type', /json/)
      .then(res => {
        expect(res.status).toEqual(201);
      });
  });
  it('should return a status 200 when a user logs in', () => {
    return request(server)
      .post('/api/auth/login')
      .send({ email: 'foobaz@gmail.com', password: '123456' })
      .expect(200)
      .expect('Content-Type', /json/)
      .then(res => {
        expect(res.status).toEqual(200);
      });
  });
});
