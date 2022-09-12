const app = require('../app');
const fm = require('../bin/getData');

const supertest = require('supertest');
const requestWithSupertest = supertest(app);

describe('Routes', () => {
    it('GET /', async () => {
        const res = await requestWithSupertest.get('/');
        expect(res.statusCode).toBe(200);
    });
});

describe('Files', () => {
    it('GET Workbook', async () => {
        expect(fm.WB).not.toBe(null);
    })
});