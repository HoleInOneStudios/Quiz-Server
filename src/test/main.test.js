const request = require('supertest');
const app = require('../../app');

describe('Test the routes', () => {
    test('\"/\" reachable', done => {
        request(app)
            .get('/')
            .then(response => {
                expect(response.statusCode).toBe(200);
                done();
            });
    });
});