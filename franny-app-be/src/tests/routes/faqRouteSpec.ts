import supertest from "supertest";
import { Faq } from "../../models/faq";
import app from "../..";
import { tokenAdmin } from "./adminRouteSpec";

const request = supertest(app);

const faq:Faq={
    question:"Vais je avoir droit a un lavage de cheveux",
    reponse:"Non le lavage des cheveux ne fait pas partie de la seance",
    category: "Onglerie"
};


describe("FAQ routes test suite", async()=>{
    it("Post data to the server ", async()=>{
        const res = await  request.post("/api/admins/faqs/")
        .set("Authorization", `Bearer ${tokenAdmin}`)
        .send(faq);
        expect(res.status).toBe(201);
    });
    it("Get data via a get method ", async()=>{
        const res = await request.get("/api/admins/faqs/");
       // .set("Authorization", `Bearer ${tokenAdmin}`);
        expect(res.status).toBe(200);
    });
   
    it("Get Faq by their category ", async()=>{
        const res = await request.post("/api/admins/faqs/Coiffure")
        //.set("Authorization", `Bearer ${tokenAdmin}`)
        .send("Coiffure");
        expect(res.status).toBe(200);
    });
    it("It delete  data via the post method", async()=>{
        const res = await request.post("/api/admins/faqs/1")
        .set("Authorization", `Bearer ${tokenAdmin}`);
        expect(res.status).toBe(200);
    });
});