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
      const invalidToken = 'mhvhgjbhjkljkn098765754667854565';
      return request(server)
        .get('/workouts')
        .set('Authorization', `Bearer ${invalidToken}`)
        .then(res => {
          expect(res.statusCode).toBe(401);
        });
    });
  });

  describe('GET /workouts/:id - Get details of exercise in one workout plan', () => {
    it('should return a status of 200 with the details of the workout', () => {
      return request(server)
        .get('/workouts/4')
        .set('Authorization', `Bearer ${token}`)
        .then(res => {
          expect(res.statusCode).toBe(200);
          expect(res.body.data).toBeDefined();
        });
    });
    it('should return a status of 404 if workout id is not a number', () => {
      return request(server)
        .get('/workouts/4ty')
        .set('Authorization', `Bearer ${token}`)
        .then(res => {
          expect(res.statusCode).toBe(404);
          expect(res.body.error).toBeDefined();
        });
    });
    it('should return a status of 404 if workout id does not exist', () => {
      return request(server)
        .get('/workouts/4000000')
        .set('Authorization', `Bearer ${token}`)
        .then(res => {
          expect(res.statusCode).toBe(404);
          expect(res.body.error).toBeDefined();
        });
    });
    it('should return a status of 401 if invalid token', () => {
      const invalidToken = 'mhvhgjbhjkljkn098765754667854565';
      return request(server)
        .get('/workouts/4')
        .set('Authorization', `Bearer ${invalidToken}`)
        .then(res => {
          expect(res.statusCode).toBe(401);
        });
    });
    it('should return a status of 400 if no token is provided', () => {
      return request(server)
        .get('/workouts/4')
        .then(res => {
          expect(res.statusCode).toBe(400);
          expect(res.body.errorMessage).toBeDefined();
        });
    });
  });

  describe('Post /workouts/4/start', () => {
    it('should return a 200 when a user starts a workout', () => {
      return request(server)
        .post('/workouts/3/start')
        .set('Authorization', `Bearer ${token}`)
        .then(res => {
          expect(res.statusCode).toBe(200);
          expect(res.body.message).toBe('workout session started');
          expect(res.body.data).toBeInstanceOf(Object);
        });
    });
    it('should return a 400 when a user tries to start another workout before completing one earlier', () => {
      return request(server)
        .post('/workouts/3/start')
        .set('Authorization', `Bearer ${token}`)
        .then(res => {
          expect(res.statusCode).toBe(400);
          expect(res.body.message).toEqual(
            'You must finish your current workout before starting another',
          );
        });
    });
    it('should return a status of 401 if invalid token', () => {
      const invalidToken = 'mhvhgjbhjkljkn098765754667854565';
      return request(server)
        .post('/workouts/3/Start')
        .set('Authorization', `Bearer ${invalidToken}`)
        .then(res => {
          expect(res.statusCode).toBe(401);
        });
    });
  });

  describe('POST /workouts/:id/end - End a workout session', () => {
    beforeAll(done => {
      request(server)
        .post('/workouts/4/start')
        .set('Authorization', `Bearer ${token}`)
        .end((err, res) => {
          done();
        });
    });
    it('should return a 200 when a user successfully ends a workout', () => {
      return request(server)
        .post('/workouts/4/end')
        .set('Authorization', `Bearer ${token}`)
        .then(res => {
          expect(res.statusCode).toBe(200);
          expect(res.body.message).toBe('workout session ended');
        });
    });
    it('should return a 400 when a user tries to end a workout that is not in progress', () => {
      return request(server)
        .post('/workouts/4/end')
        .set('Authorization', `Bearer ${token}`)
        .then(res => {
          expect(res.statusCode).toBe(400);
          expect(res.body.message).toEqual(
            'You do not have a workout session in progress',
          );
        });
    });
    it('should return a status of 401 if invalid token', () => {
      const invalidToken = 'mhvhgjbhjkljkn098765754667854565';
      return request(server)
        .post('/workouts/2/end')
        .set('Authorization', `Bearer ${invalidToken}`)
        .then(res => {
          expect(res.statusCode).toBe(401);
        });
    });
  });

  describe('GET /workouts/history - Gets all workout sessions by logged in user', () => {
    it('should return a 200 and an array of user sessions', () => {
      return request(server)
        .get('/workouts/history')
        .set('Authorization', `Bearer ${token}`)
        .then(res => {
          expect(res.statusCode).toBe(200);
          expect(res.body.message).toBe(
            'Workout History Retrieved Succesfully',
          );
          expect(res.body.workoutHistory).toBeInstanceOf(Array);
        });
    });
    it('should return a 200 when a user tries to retrieve workout history with date limit', () => {
      return request(server)
        .get('/workouts/history?days=2')
        .set('Authorization', `Bearer ${token}`)
        .then(res => {
          expect(res.statusCode).toBe(200);
          expect(res.body.message).toEqual(
            'Workout History Retrieved Succesfully',
          );
        });
    });
    it('should return a status of 401 if invalid token', () => {
      const invalidToken = 'mhvhgjbhjkljkn098765754667854565';
      return request(server)
        .get('/workouts/history')
        .set('Authorization', `Bearer ${invalidToken}`)
        .then(res => {
          expect(res.statusCode).toBe(401);
        });
    });
  });
});
