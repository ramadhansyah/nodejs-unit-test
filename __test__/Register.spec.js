const request = require('supertest');
const app = require('./../src/app');
it('response 200 , register request is valid', (done) => {
  request(app)
    .post('/api/auth/register')
    .send({
      username: 'admin',
      emai: 'admin@gmail.com',
      password: 'pass123',
    })
    .then((response) => {
      expect(response.status).toBe(200);
      done();
    });
});
