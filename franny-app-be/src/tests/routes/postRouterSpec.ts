import {Request,Response } from "express";
import supertest from "supertest";
import app from "../..";
import { Post } from "../../models/post";

const request =  supertest(app);

const post:Post = {
    //post_id?:number ,
    title:"string" ,
    summary:"string" ,
    content:"string" ,
    author:3 ,
    create_at:"2023-02-28"  ,
    illustration:"/fran/jpeg" ,
    slug:"string",
    applause:1,
    category :"Family"
};


describe("Post routes tests suite", async()=>{
    it("Create new post", async()=>{
        const res = await request.post("/api/posts").send(post);
        expect(res.status).toBe(201);
    });

    it("Get the list of posts", async()=>{
        const res = await request.get("/api/posts");
        expect(res.status).toBe(200);
    });

    it("Get the top ten most liked posts", async()=>{
        const res = await request.get("/api/posts/topten");
        expect(res.status).toBe(200);
    });

    it("Get the most applaused posts", async()=>{
        const res = await request.get("/api/posts/topapplause");
        expect(res.status).toBe(200);
    });

    it("Get the posts by search term", async()=>{
        const res = await request.get("/api/posts/:Maternity");
        expect(res.status).toBe(200);
    });

    it("Get posts by category", async()=>{
        const res = await request.get("/api/posts/:Family").send("Maternity");
        expect(res.status).toBe(200);
    });

    it("Get the specified post", async()=>{
        const res = await request.get("/api/posts/1");
        expect(res.status).toBe(200);
    });

  
    it("Update post by id", async()=>{
        const res = await request.put("/api/posts/1").send(post);
        expect(res.status).toBe(200);
    });

    it("Delete post by her id", async()=>{
        const res = await request.delete("/api/posts/1").send(post);
        expect(res.status).toBe(200);
    });


});