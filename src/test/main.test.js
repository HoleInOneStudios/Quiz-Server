const app = require('../app');
const fm = require('../bin/getData');

const fs = require('fs');
const path = require('path');
const supertest = require('supertest');

const requestWithSupertest = supertest(app);

beforeAll(() => {

});

describe('Routes', () => {
    it('GET /', async () => {
        const res = await requestWithSupertest.get('/');
        expect(res.statusCode).toBe(200);
    });
    describe('Quiz Routes', () => {
        fm.WB.SheetNames.forEach(sheet => {
            it(`GET /${sheet}`, async () => {
                const res = await requestWithSupertest.get(`/${sheet}`);
                expect(res.statusCode).toBe(200);
            });
        });
    });
});

describe('Files', () => {
    it('GET Workbook', async () => {
        expect(fm.WB).not.toBe(null);
    })
    it('GET public directory', async () => {
        expect(fs.existsSync(path.join(__dirname, "../public"))).toBe(true);
    });
    it('GET Views', async () => {
        expect(fs.existsSync(path.join(__dirname, "../views"))).toBe(true);
    });
});

afterAll(() => {
    fm.UnWatchFile();
})