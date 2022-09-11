const supertest = require('supertest');
const app = require('../../app');
const requestWithSupertest = supertest(app);

describe('Test the routes', () => {
    it('GET /', async () => {
        const res = await requestWithSupertest.get('/');
        expect(res.statusCode).toBe(200);
    });
});