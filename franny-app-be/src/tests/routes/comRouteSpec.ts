import supertest  from "supertest";
import { Comment } from "../../models/comment";
import app from "../..";
import { tokenAdmin } from "./adminRouteSpec";

const request = supertest(app);
const comment:Comment = {
    comment_id:1,
    email:"francine@mail.com",
    comment_body: "this is my comment",
    comment_date:"2023-02-05",
    post_id:1
};

describe("Comment routes tests suite", async()=>{

    it("Create a new comment via the post route", async():Promise<void>=>{
        const res = await request.post("/api/comments").send(comment);
        expect(res.status).toBe(201);
    });

    it("Get all the comments",async():Promise<void>=>{
        const res = await request.get("/api/comments");
        expect(res.status).toBe(200);
    });

    it("Get the number of comments", async():Promise<void>=>{
        const res = await request.get("/api/comments/count");
        expect(res.status).toBe(200);
    });

    it("Delete a comment via the comments route", async():Promise<void>=>{
        const res = await request.delete("/api/comments")
        .set("Authorization", `Bearer ${tokenAdmin}`);
        expect(res.status).toBe(200);
    });

});