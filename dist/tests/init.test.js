"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const supertest_1 = __importDefault(require("supertest"));
const index_1 = __importDefault(require("../src/index"));
describe('GET /', () => {
    it('should return 200 OK', () => {
        return (0, supertest_1.default)(index_1.default).get('/').expect(200);
    });
});
describe('GET /db/', () => {
    it('should return 200 OK', () => {
        return (0, supertest_1.default)(index_1.default).get('/db/').expect(200);
    });
});