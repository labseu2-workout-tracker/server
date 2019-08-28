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
  it('should return a status 409 when a user signs up with existing credentials', () => {
    return request(server)
      .post('/api/auth/signup')
      .send({
        username: 'Bar',
        email: 'foobaz@gmail.com',
        password: '123456',
      })
      .expect(409)
      .expect('Content-Type', /json/)
      .then(res => {
        expect(res.status).toEqual(409);
      });
  });
  it('should return a status 400 when a user signs up with an invalid email', () => {
    return request(server)
      .post('/api/auth/signup')
      .send({
        username: 'Bar',
        email: 'foobaz',
        password: '123456',
      })
      .expect(400)
      .expect('Content-Type', /json/)
      .then(res => {
        expect(res.status).toEqual(400);
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
  it('should return a status 401 when a user provides invalid credentials', () => {
    return request(server)
      .post('/api/auth/login')
      .send({ email: 'fooba@gmail.com', password: '1' })
      .expect(401)
      .expect('Content-Type', /json/)
      .then(res => {
        expect(res.status).toEqual(401);
      });
  });
});
