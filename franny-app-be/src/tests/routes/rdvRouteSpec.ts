// import supertest from "supertest";
// import { Rendezvous } from "../../models/rendezvous";
// import app from "../..";
// import { tokenAdmin } from "./adminRouteSpec";

// const request = supertest(app);

// const rdv:Rendezvous = {
//     rdvdate:"2023-03-03",
//     doneby:10,
//     prestation:2,
//     rdvstate:1 ,
//     rdvcode:"0001YAMOKCOIF",
//     rdvtype:1,
//     userid:"mail@mail.com" , 
//     ville:"Douala",
//     quartier:"Mokolo"
// };

// describe("Rendezvous routes test suite ", async()=>{
//     it("Post data to the server ", async()=>{
//         const res = await  request.post("/api/rendezvous/")
//         .set("Authorization", `Bearer ${tokenAdmin}`)
//         .send(rdv);
//         expect(res.status).toBe(201);
//     });

//     it("Get a list of rdv from the server ", async()=>{
//         const res = await  request.get("/api/rendezvous/")
//         .set("Authorization", `Bearer ${tokenAdmin}`);
//         //.send(rdv);
//         expect(res.status).toBe(200);
//     });

//     // it("Update  a rdv to the server ", async()=>{
//     //     const res = await  request.put("/api/rendezvous/2023-03-15/2/1/2/Zoe/2")
//     //     .set("Authorization", `Bearer ${tokenAdmin}`);
//     //    // .send(data);
//     //     expect(res.status).toBe(200);
//     // });

//     it("Get a list of rdv by their state from the server ", async()=>{
//         const res = await  request.get("/api/rendezvous/1")
//         .set("Authorization", `Bearer ${tokenAdmin}`);
//         //.send("2023-03-15",2,1,2,Zoe,2);
//         expect(res.status).toBe(200);
//     });

//     it("Get the number of rdv by their state", async()=>{
//         const res = await  request.get("/api/rendezvous/1")
//         .set("Authorization", `Bearer ${tokenAdmin}`);
//         //.send(rdv);
//         expect(res.status).toBe(200);
//     });

//     it("Delete data to the server ", async()=>{
//         const res = await  request.delete("/api/rendezvous/1")
//         .set("Authorization", `Bearer ${tokenAdmin}`);
//         //.send(rdv);
//         expect(res.status).toBe(200);
//     });
// });