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
    twitter_url:"https://www.twitter.com",                    
    linkedin_url:"https://www.linkedin.com",  
    facebook_url:"https://www.facebook.com",               
    email:"sophia@mail.com",                 
    admin_password:"newpword",               
    avatar:"file",                   
    activ_date:"2023-02-28",              
    superuser:false
};

export const tokenAdmin = genToken(admin);


describe("Admin routes test suite", async()=>{


    it("Create a new admin via the main route", async()=>{
        const res = await request.post("/api/admins")
        .set("Authorization", `Bearer ${tokenAdmin}`)
        .send(admin);
        console.log(res.files);
        expect(res.status).toBe(201);
    });

    it("Get the list of admin", async()=>{
        const res = await request.get("/api/admins")
        .set("Authorization", `Bearer ${tokenAdmin}`);
        expect(res.status).toBe(200);
    });

    it("Require authentication", async()=>{
        const res = await request.get("/api/admins/signin");
        expect(res.status).toBe(401);
    });

    it("Get the specified admin", async()=>{
        const user = {email:"sophia@mail.com",admin_password:"newpword"};
        const res = await request.get("/api/admins/signin")
        .set("Authorization", `Bearer ${tokenAdmin}`)
        .send(user);
        expect(res.status).toBe(200);
    });

    it("It update the specified admin", async()=>{
        const user = {email:"sophia@mail.com",password:"newpw1234"};
        const res = await request.put("/api/admins/reset")
        .set("Authorization", `Bearer ${tokenAdmin}`)
        .send(user) ;
        expect(res.status).toBe(200);
    });


    it("Delete the specified admin", async()=>{
        const user = {email:"sophia@mail.com",password:"newpw1234"};
        const res = await request.delete("/api/admins/delete")
        .set("Authorization", `Bearer ${tokenAdmin}`).send(user.email);
        expect(res.status).toBe(200);
    });
});