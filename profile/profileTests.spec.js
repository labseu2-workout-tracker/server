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
        token = res.body.token;
        done();
      });
  });

  describe('GET /profile - Get a user details', () => {
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
          expect(res.body.errorMessage).toBeDefined();
        });
    });
  });

  describe('PUT /profile - Update a users profile', () => {
    it('should return a status of 200 with the details of the updated user', () => {
      return request(server)
        .put('/profile')
        .set('Authorization', `Bearer ${token}`)
        .send({
          gender: 'other',
        })
        .then(res => {
          expect(res.statusCode).toBe(200);
          expect(res.body.user.gender).toBe('other');
        });
    });
    it('should return a status of 200 with the details of the updated user', () => {
      return request(server)
        .put('/profile')
        .set('Authorization', `Bearer ${token}`)
        .send({
          username: 'haywhyze',
        })
        .then(res => {
          expect(res.statusCode).toBe(200);
          expect(res.body.user.username).toBe('haywhyze');
        });
    });
    it('should return a status of 200 with the details of the updated user', () => {
      return request(server)
        .put('/profile')
        .set('Authorization', `Bearer ${token}`)
        .send({
          height: '89',
        })
        .then(res => {
          expect(res.statusCode).toBe(200);
          expect(res.body.user.height).toBe(89);
        });
    });
    it('should return a status of 200 with the details of the updated user', () => {
      return request(server)
        .put('/profile')
        .set('Authorization', `Bearer ${token}`)
        .send({
          weight: '455',
        })
        .then(res => {
          expect(res.statusCode).toBe(200);
          expect(res.body.user.weight).toBe(455);
        });
    });
    it('should return a status of 200 with the details of the updated user', () => {
      return request(server)
        .put('/profile')
        .set('Authorization', `Bearer ${token}`)
        .send({
          user_level: 'Expert',
        })
        .then(res => {
          expect(res.statusCode).toBe(200);
          expect(res.body.user.user_level).toBe('Expert');
        });
    });
    it('should return a status of 200 with the details of the updated user', () => {
      return request(server)
        .put('/profile')
        .set('Authorization', `Bearer ${token}`)
        .send({
          password: 'newPassword',
        })
        .then(res => {
          expect(res.statusCode).toBe(200);
        });
    });
    it('should return a status 200 when user logs in with the new password', () => {
      return request(server)
        .post('/auth/login')
        .send({
          email: 'yusuf@example.com',
          password: 'newPassword',
        })
        .expect(200)
        .expect('Content-Type', /json/)
        .then(response => {
          expect(response.status).toEqual(200);
        });
    });
    it('should return a status of 400 when validation fails', () => {
      return request(server)
        .put('/profile')
        .set('Authorization', `Bearer ${token}`)
        .send({
          user_level: 'wrong',
        })
        .then(res => {
          expect(res.statusCode).toBe(400);
        });
    });
    it('should return a status of 400 when validation fails', () => {
      return request(server)
        .put('/profile')
        .set('Authorization', `Bearer ${token}`)
        .send({
          gender: 'wrong',
        })
        .then(res => {
          expect(res.statusCode).toBe(400);
        });
    });
    it('should return a status of 401 if invalid token', () => {
      const invalidToken = 'mhvhgjbhjkljkn098765754667854565';
      return request(server)
        .put(`/profile`)
        .set('Authorization', `Bearer ${invalidToken}`)
        .send({
          weight: '455',
        })
        .then(res => {
          expect(res.statusCode).toBe(401);
        });
    });
    it('should return a status of 400 if no token is provided', () => {
      return request(server)
        .put(`/profile`)
        .send({
          weight: '455',
        })
        .then(res => {
          expect(res.statusCode).toBe(400);
        });
    });
  });
});
