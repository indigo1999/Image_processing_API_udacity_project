
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

describe("Test endpoint response image", () => {
    it("gets the api endpoint image", async () => {
        const temp_width : number = 900;
        const temp_height : number = 900;
        const temp_filename : string = "fjord"
        const query_string : string = `filename=${temp_filename}&width=${temp_width}&height=${temp_height}`
        const response = await request.get(`/api/image_process?${query_string}`)
        expect(response.status).toBe(200);
    })
})