import supertest from "supertest";
import { Beautifyer } from "../../models/beautifyer";
import app from "../..";
import { tokenAdmin } from "./adminRouteSpec";

const request = supertest(app);
const beau:Beautifyer ={
    bname:"cassandra",
    email:"amerie@mail.com",
    quartier:"Bepanda",
    phone:675874587,
    details:"coiffeuse, Maquilleuse",
    recruit_date:"2023-01-01",
    ville:"Douala",
    create_by: "francadmin@gmail.com"
};

describe("Beautifyers route test suite", async()=>{
    it("Post data to the server ", async()=>{
        const res = await  request.post("/api/admins/beautifyers")
        .set("Authorization", `Bearer ${tokenAdmin}`)
        .send(beau);
        expect(res.status).toBe(201);
    });

    it("Get data to the server ", async()=>{
        const res = await  request.get("/api/admins/beautifyers")
        .set("Authorization", `Bearer ${tokenAdmin}`);
        expect(res.status).toBe(200);
    });

    it("Show the specified  data  ", async()=>{
        const res = await  request.get("/api/admins/beautifyers")
        .set("Authorization", `Bearer ${tokenAdmin}`);
        expect(res.status).toBe(200);
    });

    it("Update the specified user to the server ", async()=>{
        const res = await  request.put("/api/admins/beautifyers/1")
        .set("Authorization", `Bearer ${tokenAdmin}`);
        expect(res.status).toBe(200);
    });

   
});