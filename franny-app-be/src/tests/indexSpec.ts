import app from "../index";
import supertest from "supertest";

const request = supertest(app);


describe("Test the main endpoint route", async():Promise<void>=>{

    it("Test the main index route ", async():Promise<void>=>{
        const res = await request.get("/");

        expect(res.status).toBe(200);
    });
});