import supertest from "supertest";
import { User } from "../../models/user";
import app from "../..";

const user:User = {
    user_name:"Faiza",
    user_email:"faiza@mail.com"
};

const request  =  supertest(app);

describe("User routes test suite", async()=>{

    it("Create new user via the post method", async()=>{
        const res = await  request.post("/api/users").send(user);
        expect(res.status).toBe(201);
    });

    it("Get the list of all users", async()=>{
        const res =  await request.get("/api/users");
        expect(res.status).toBe(200);
    });

    it("Delete an article via the main route", async()=>{
        const res = await request.delete("/api/users");
        expect(res.status).toBe(200);
    });

});