import supertest from "supertest";
import { Admin } from "../../models/admin";
import app from "../..";

const request = supertest(app);
const admin:Admin = {
    admin_id:1,
    admin_name:"Sophia Kendrick" ,
    username:"sophia" ,                               
    twitter_url:"www.twitter.com",                    
    linkedin_url:"www.linkedin.com",  
    facebook_url:"www.facebook.com",               
    email:"sophia@mail.com",                 
    admin_password:"newpword",               
    avatar:"/avatar.jpg",                     
    activ_date:"2023-02-28",              
    superuser:false
};


describe("Admin routes test suite", async()=>{
    it("Create a new admin via the main route", async()=>{
        const res = await request.post("/api/admins").send(admin);
        expect(res.status).toBe(201);
    });

    it("Get the list of admin", async()=>{
        const res = await request.get("/api/admins");
        expect(res.status).toBe(200);
    });

    it("It update the specified admin", async()=>{
        const res = await request.put("/api/admins/sophia@mail.com").send("newpw") ;
        expect(res.status).toBe(200);
    });

    it("Get the specified admin", async()=>{
        const res = await request.get("/api/admins/:sophia@mail.com").send("newpw");
        expect(res.status).toBe(200);
    });

    it("Delete the specified admin", async()=>{
        const res = await request.delete("/api/admins/:sophia@mail.com");
        expect(res.status).toBe(200);
    });
});