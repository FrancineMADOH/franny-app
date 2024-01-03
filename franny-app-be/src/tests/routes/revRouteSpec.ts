// import supertest from "supertest";
// import app from "../..";
// import { tokenAdmin } from "./adminRouteSpec";
// import { Review } from "../../models/review";

// const request = supertest(app);

// const rev:Review = {
//     rdvid: 1,  
//     user_id: "francine.n@mail.com",           
//     done_by:1 ,                  
//     review_date:"2023-03-09" ,               
//     note: 5,                      
//     comment: "Mon maquillage etait parfait"     
// };

// describe("Review routes test suite", async()=>{
//     it("Post a new review to the server", async()=>{
//         const res = await  request.post("/api/reviews")
//         //.set("Authorization", `Bearer ${tokenAdmin}`)
//         .send(rev);
//         expect(res.status).toBe(201);
//     });

//     it("Get a list of review from the server", async()=>{
//         const res = await  request.get("/api/reviews")
//         .set("Authorization", `Bearer ${tokenAdmin}`)
//         .send(rev);
//         expect(res.status).toBe(200);
//     });

//     it("Get  a single review from the server", async()=>{
//         const res = await  request.post("/api/reviews/2")
//         .set("Authorization", `Bearer ${tokenAdmin}`)
//        .send("2");
//        console.log(res.body);

//        // expect(res.status).toBe(200);
//     });
// });