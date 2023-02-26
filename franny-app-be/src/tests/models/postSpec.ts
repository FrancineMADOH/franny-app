import client from "../../database";
import { Post, postStore } from "../../models/post";  

const store = new postStore();

const post:Post = {
        title:"string" ,
        summary:"string" ,
        content:"string" ,
        author:1 ,
        create_at:"" ,
        illustration:"string" ,
        slug:"string",
        applause:12,
        category :"string"
};

describe("Post store model definition", async()=>{

    it("Should have a create method", ()=>{
        expect(store.create).toBeDefined();
    });
});

describe("Post store tests suite", async()=>{
    beforeAll(async()=>{
        const conn = await client.connect();
        const sql_command = "INSERT INTO posts(post_id,title,summary,content,author,createe_at,illustration,slug,applause,cateegory) VALUES($1,$2,$3,$4,$5,$6,$7,$8,$9) RETURNING *;";
        await conn.query(sql_command,[
            post.title,
            post.summary,
            post.content,
            post.author,
            post.create_at,
            post.illustration,
            post.slug,
            post.applause,
            post.applause
        ]);
        conn.release();

    afterAll(async()=>{
            const conn = await client.connect();
            await conn.query("DELETE FROM posts;");
            await conn.query("ALTER SEQUENCE posts_post_id_seq RESTART WITH 1;");
            conn.release();
        });
    });
});