const app = require('../app');
const { WB, WatchFile, UnWatchFile } = require('../bin/getData');

const { existsSync } = require('fs');
const { join } = require('path');
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
        WB.SheetNames.forEach(sheet => {
            it(`GET /${sheet}`, async () => {
                const res = await requestWithSupertest.get(`/${sheet}`);
                expect(res.statusCode).toBe(200);
            });
        });
    });
});

describe('Files', () => {
    it('GET Workbook', async () => {
        expect(WB).not.toBe(null);
    })
    it('GET public directory', async () => {
        expect(existsSync(join(__dirname, "../public"))).toBe(true);
    });
    it('GET Views', async () => {
        expect(existsSync(join(__dirname, "../views"))).toBe(true);
    });
});

afterAll(() => {
    UnWatchFile();
})