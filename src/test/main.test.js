const app = require('../app');
const fm = require('../bin/getData');

const fs = require('fs');
const path = require('path');
const supertest = require('supertest');

const requestWithSupertest = supertest(app);

describe('Routes', () => {
    it('GET /', async () => {
        const res = await requestWithSupertest.get('/');
        expect(res.statusCode).toBe(200);
    });
});

describe('Files', () => {
    it('GET Workbook', () => {
        expect(fm.WB).not.toBe(null);
    })
    it('GET public directory', () => {
        expect(fs.existsSync(path.join(__dirname, "../public"))).toBe(true);
    });
    it('GET Views', () => {
        expect(fs.existsSync(path.join(__dirname, "../views"))).toBe(true);
    })

    afterAll(() => {
        fm.UnWatchFile();
    })
});