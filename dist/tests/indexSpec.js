"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const supertest_1 = __importDefault(require("supertest"));
const index_1 = __importDefault(require("../index"));
it('expect myFunc(5) to equal 25', () => {
    expect(index_1.default.myFunc(5)).toEqual(25);
});
const request = (0, supertest_1.default)(index_1.default.app);
describe("Test endpoint response", () => {
    it("gets the api endpoint", async () => {
        const response = await request.get("/api");
        expect(response.status).toBe(200);
    });
});
