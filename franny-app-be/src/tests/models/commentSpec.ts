import client from "../../database";
import { Comment, commentStore } from "../../models/comment";

const store = new commentStore();
const comment:Comment = {
    email:"francine@email.com",
    comment_body: "La famille est le premier maillon du changement",
    comment_date:new Date().toLocaleDateString(),
    post_id:2
};

describe("Comment store model definition", async()=>{
    it("Should have a create method", ()=>{
        expect(store.create).toBeDefined();
    });
    it("Should have an index method", ()=>{
        expect(store.index).toBeDefined();
    });
    it("Should have a count method", ()=>{
        expect(store.count).toBeDefined();
    });
    it("Should have a delete method", ()=>{
        expect(store.delete).toBeDefined();
    });
});

describe("Comments store tests suite", async()=>{
    beforeAll( async()=>{
        const conn = await client.connect();
        const sql_command =  "INSERT INTO comments(email,comment_body,comment_date,post_id) VALUES($1,$2,$3,$4);";
        await conn.query(sql_command, [comment.email,comment.comment_body,comment.comment_date,comment.post_id]);
        conn.release();
    });

    it("Create method should add a new comment to the db", async()=>{
        const result = await store.create({
            email:"francine@email.com",
            comment_body: "La femme est pionniere de la restructuration de la societe",
            comment_date:new Date().toLocaleString(),
            post_id:1
        });
        expect(result).toEqual({
            comment_id:3,
            email:"francine@email.com",
            comment_body: "La femme est pionniere de la restructuration de la societe",
            comment_date:new Date().toLocaleString(),
            post_id:1
        });
    });

    it("Index method return a list of all comments of the specified post", async()=>{
        const result = await store.index(2);
        expect(result[0]).toEqual({
            comment_id:2,
            email:"francine@email.com",
            comment_body: "La famille est le premier maillon du changement",
            comment_date:new Date().toLocaleDateString(),
            post_id:2
        });
    });

    it("Count method reurn the number of comment on the specified post", async()=>{
        const result = await store.count(1);
        expect(result).toBeInstanceOf(Number);
        expect(result).toBe(1);
    });

    it("Delete method remove the specified comment", async()=>{
        const result = await store.delete(2);
        expect(result.comment_id).toEqual(2);
    });

    afterAll(async()=>{
        const conn = await client.connect();
        await conn.query("DELETE FROM comments;");
        await conn.query("ALTER SEQUENCE comments_comment_id_seq RESTART WITH 1;");
        conn.release();
    });
});