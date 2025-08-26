
import supertest from "supertest"
import index from "../index";

it('expect myFunc(5) to equal 25', () => {
    expect(index.myFunc(5)).toEqual(25)
})

const request = supertest(index.app)

describe("Test endpoint response", () => {
    it("gets the api endpoint", async () => {
        const response = await request.get("/api")
        expect(response.status).toBe(200);
    })
})