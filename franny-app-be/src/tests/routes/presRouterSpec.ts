import supertest from "supertest";
import { Prestation } from "../../models/prestation";
import app from "../..";
import { tokenAdmin } from "./adminRouteSpec";

const request = supertest(app);

const p:Prestation = {
    title: "Pedicure des Pied",
    price:5000,
    duration: "90 mn",
    category: "Coiffure" ,
    seance:"Lavage de main,curage des ongles,vernis",
    gold :"Gel pour un supplement de 500",
    premium:"Pose double pour un supplement de 2000"
};

describe("Prestation routes models test suite", async()=>{
    it("Post data to the main route", async()=>{
        const res =await request.post("/api/prestations")
        .set("Authorization", `Bearer ${tokenAdmin}`)
        .send(p);
        expect(res.status).toBe(201);
    });

    it("Get data from the main route", async()=>{
        const res =await request.get("/api/prestations")
        //.set("Authorization", `Bearer ${tokenAdmin}`)
        .send(p);
        expect(res.status).toBe(200);
    });

    // it("Update data from to the main route", async()=>{
    //     const p = {price:10000,id:2};
    //     const res =await request.post("/api/prestations/2/10000")
    //     .set("Authorization", `Bearer ${tokenAdmin}`);
    //    //send(p);
    //    expect(res.status).toBe(200);
    // });
});