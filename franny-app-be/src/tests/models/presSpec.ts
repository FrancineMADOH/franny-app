// import client from "../../database";
// import { presStore, Prestation } from "../../models/prestation";

// const store = new presStore();

// const p:Prestation = {
//     title: "Manicure des mains",
//     price:5000,
//     duration: "90 mn",
//     category: "Coiffure" ,
//     seance:"Lavage de main,curage des ongles,vernis",
//     gold :"Gel pour un supplement de 500",
//     premium:"Pose double pour un supplement de 2000"
// };

// describe("Prestation store model definition", async()=>{
//     it("Should have a create method", ()=>{
//         expect(store.create).toBeDefined();
//     });
//     it("Should have an index method", ()=>{
//         expect(store.index).toBeDefined();
//     });
//     it("Should have a delete method", ()=>{
//         expect(store.update).toBeDefined();
//     });
// });

// describe("Prestation model tests suite", async()=>{

//     beforeAll( async()=>{
//             const conn = await client.connect();
//             const sql_query = "INSERT INTO prestations(title,price,duration,category,seance,gold,premium) VALUES($1,$2,$3,$4,$5,$6,$7) RETURNING *;";
//             await conn.query(sql_query,[p.title,p.price,p.duration,p.category,p.seance,p.gold,p.premium]);
//             conn.release();
//     });

//     it("Create a new prestation", async()=>{
//         const result = await store.create({
//             title: "Rasta",
//             price:9000,
//             duration: "120 mn",
//             category: "Coiffure",
//             seance:"Chignon au gel, Pose postiche",
//             gold :"Traitement de cheveux pour 500",
//             premium:"Pose double pour un supplement de 2000"
//         });

//         expect(result).toEqual({
//             pres_id:3,
//             title: "Rasta",
//             price:9000,
//             duration: "120 mn",
//             category: "Coiffure",
//             seance:"Chignon au gel, Pose postiche",
//             gold :"Traitement de cheveux pour 500",
//             premium:"Pose double pour un supplement de 2000"
            
//         });
//     });
//     it("Return a list of  prestations", async()=>{
//         const result = await store.index();
//         expect(result.length).toBe(3);
//     });

//     it("Update the specified prestation", async()=>{
//         const result = await store.update(10000,3);
//         expect(result).toEqual({
//             pres_id:3,
//             title: "Rasta",
//             price:10000,
//             duration: "120 mn",
//             category: "Coiffure",
//             seance:"Chignon au gel, Pose postiche",
//             gold :"Traitement de cheveux pour 500",
//             premium:"Pose double pour un supplement de 2000"
//         });
//     });

//     afterAll(async()=>{
//             const conn = await client.connect();
//             await conn.query("DELETE FROM prestations;");
//             await conn.query("ALTER SEQUENCE prestations_pres_id_seq RESTART WITH 1;");
//             conn.release();
//         });
// });