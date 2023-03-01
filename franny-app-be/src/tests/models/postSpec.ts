import client from "../../database";
import { Post, postStore } from "../../models/post";  

const store = new postStore();

const post:Post = {
        title:"Non les enfants ne prennent pas de decision" ,
        summary:"sommaire de larticle sur la responsabilite des enfants" ,
        content:"le contenu de l'article" ,
        author:1 ,
        create_at:"2023-03-05" ,
        illustration:"/illutration.jpeg" ,
        slug:"non-les-enfants-ne-prennent-pas-de-decision",
        applause:12,
        category :"feminity"
};



describe("Post store model definition", async()=>{

    it("Should have a create method", ()=>{
        expect(store.create).toBeDefined();
    });

    it("Should have an index method", ()=>{
        expect(store.index).toBeDefined();
    });

    it("Should have a show  method", ()=>{
        expect(store.show).toBeDefined();
    });
    it("Should have an update  method", ()=>{
        expect(store.update).toBeDefined();
    });
    it("Should have an topten  method", ()=>{
        expect(store.topten).toBeDefined();
    });
    it("Should have an topten  method", ()=>{
        expect(store.topapplause).toBeDefined();
    });
    it("Should have an search  method", ()=>{
        expect(store.search).toBeDefined();
    });
    it("Should have a category method", ()=>{
        expect(store.category).toBeDefined();
    });
    it("Should have a delete method", ()=>{
        expect(store.delete).toBeDefined();
    });
});

describe("Post store tests suite", async()=>{
    beforeAll(async()=>{
        const conn = await client.connect();
        const sql_command = "INSERT INTO posts(title,summary,content,author,create_at,illustration,slug,applause,category) VALUES($1,$2,$3,$4,$5,$6,$7,$8,$9) RETURNING *;";
        await conn.query(sql_command,[
            post.title,
            post.summary,
            post.content,
            post.author,
            post.create_at,
            post.illustration,
            post.slug,
            post.applause,
            post.category
        ]);
        conn.release();
    });
        

    it("Create method should add a new post to the db", async ()=>{
        const result = await store.create({
            title:"cool article",
            summary:"everything in this article is cool",
            content:"This article content is cool a super article is about to be lunched",
            author:1,
            create_at:"2023-02-28",
            illustration:"/image.png",
            slug:"cool-article",
            applause:20,
            category:"Maternity"
        });

        expect(result).toEqual({
            post_id:3,
            title:"cool article",
            summary:"everything in this article is cool",
            content:"This article content is cool a super article is about to be lunched",
            author:1,
            create_at:"2023-02-28",
            illustration:"/image.png",
            slug:"cool-article",
            applause:20,
            category:"Maternity"
        });
    });

    it("Index method return a list of posts", async()=>{
        const result =  await store.index();
        expect(result.length).toBe(2);
    });

    it("show method return the specified post", async()=>{
        const result = await store.show(2);
        expect(result).toEqual({
            post_id:2,
            title:"Non les enfants ne prennent pas de decision" ,
            summary:"sommaire de larticle sur la responsabilite des enfants" ,
            content:"le contenu de l'article" ,
            author:1 ,
            create_at:"2023-03-05" ,
            illustration:"/illutration.jpeg" ,
            slug:"non-les-enfants-ne-prennent-pas-de-decision",
            applause:12,
            category :"feminity"
        });
    });

    it("Update method return a update post", async()=>{
        const result = await store.update({
            title:"New  article updated",
            summary:"everything in this article is cool updated",
            content:"This article content is cool a super article is about to be lunched updated",
            author:2,
            create_at:"2023-02-28",
            illustration:"/image.png",
            slug:"cool-article updated",
            applause:20,
            category:"Maternity"
        },3);

        expect(result).toEqual({
            post_id:3,
            title:"New  article updated",
            summary:"everything in this article is cool updated",
            content:"This article content is cool a super article is about to be lunched updated",
            author:2,
            create_at:"2023-02-28",
            illustration:"/image.png",
            slug:"cool-article updated",
            applause:20,
            category:"Maternity"
        });
    });

    it("Top-ten method return a list of 10 recents articles", async()=>{
        const result = await store.topten();
        expect(result.length).toBeLessThanOrEqual(10);
        expect(result[0].create_at).toBe("2023-03-05");
    });

    it("Top applause return a list of the top liked articles", async()=>{
        const result = await store.topapplause();
        expect(result[0].applause).toBe(20);
        
    });

    it("Search method return articles containing the search term", async()=>{
        const result = await store.search("updated");
        expect(result[0].content).toBe("This article content is cool a super article is about to be lunched updated");
    });

    it("Category method return a list of article of the same category", async()=>{
        const result = await store.category("Maternity");
        expect(result.length).toBe(1);
        expect(result[0].category).toBe("Maternity");
    });

    it("Delete method remove an article from the db", async()=>{
        const result = await store.delete(2);
        expect(result.post_id).toBe(2);
    });


    afterAll(async()=>{
            const conn = await client.connect();
            await conn.query("DELETE FROM posts;");
            await conn.query("ALTER SEQUENCE posts_post_id_seq RESTART WITH 1;");
            conn.release();
    });

    
});