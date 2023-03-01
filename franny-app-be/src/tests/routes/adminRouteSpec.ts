import supertest from "supertest";
import dotenv from "dotenv";
import { Admin } from "../../models/admin";
import app from "../..";
import { genToken } from "../../middlewares/auth";

const request = supertest(app);
dotenv.config();


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

export const tokenAdmin = genToken(admin);


describe("Admin routes test suite", async()=>{


    it("Create a new admin via the main route", async()=>{
        const res = await request.post("/api/admins")
        .set("Authorization", `Bearer ${tokenAdmin}`)
        .send(admin);
        expect(res.status).toBe(201);
    });

    it("Get the list of admin", async()=>{
        const res = await request.get("/api/admins")
        .set("Authorization", `Bearer ${tokenAdmin}`);
        expect(res.status).toBe(200);
    });

    it("Require authentication", async()=>{
        const res = await request.get("/api/admins/sophia@mail.com");
        expect(res.status).toBe(401);
    });

    it("Get the specified admin", async()=>{
        const res = await request.get("/api/admins/:sophia@mail.com")
        .set("Authorization", `Bearer ${tokenAdmin}`)
        .send("newpword");
        expect(res.status).toBe(200);
        expect(res.text).toEqual("Invalid Email/Password combination");
    });

    it("It update the specified admin", async()=>{
        const res = await request.put("/api/admins/${email}")
        .set("Authorization", `Bearer ${tokenAdmin}`)
        .send("newpw") ;
        expect(res.status).toBe(200);
    });


    it("Delete the specified admin", async()=>{
        const res = await request.delete("/api/admins/:sophia@mail.com")
        .set("Authorization", `Bearer ${tokenAdmin}`);
        expect(res.status).toBe(200);
    });
});