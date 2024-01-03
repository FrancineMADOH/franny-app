// import client from "../../database";
// import { faqStore, Faq } from "../../models/faq";

// const store = new faqStore();

// const faq:Faq = {
//     question:"Vais je avoir droit a un lavage de cheveux",
//     reponse:"Non le lavage des cheveux ne fait pas partie de la seance",
//     category: "Onglerie"
// };

// describe("Faq store model definition", async()=>{
//     it("Should have a create method", ()=>{
//         expect(store.create).toBeDefined();
//     });
//     it("Should have an index method", ()=>{
//         expect(store.index).toBeDefined();
//     });
//     it("Should have a delete method", ()=>{
//         expect(store.delete).toBeDefined();
//     });
// });

// describe("Faq model tests suite", async()=>{

//     beforeAll( async()=>{
//             const conn = await client.connect();
//             const sql_command =  "INSERT INTO faqs(question,reponse,category) VALUES($1,$2,$3) RETURNING *;";
//             await conn.query(sql_command, [faq.question, faq.reponse,faq.category]);
//             conn.release();
//     });

//     it("Create a new Faq questions", async()=>{
//         const result = await store.create({
//             question: "Effectuez vous des soins la nuit ?",
//             reponse: "La limite des heures de service est 22h",
//             category: "Coiffure"
//         });

//         expect(result).toEqual({
//             faq_id:3,
//             question: "Effectuez vous des soins la nuit ?",
//             reponse: "La limite des heures de service est 22h",
//             category: "Coiffure"
//         });
//     });
//     it("Return a list of  Faq questions", async()=>{
//         const result = await store.index();
//         expect(result.length).toBe(3);
//     });

//     it("Return Faq questions by its category", async()=>{
//         const result = await store.category("Coiffure");
//         expect(result).toEqual([{
//             faq_id:3,
//             question: "Effectuez vous des soins la nuit ?",
//             reponse: "La limite des heures de service est 22h",
//             category: "Coiffure"
//         }]);
//     });

//     it("Delete a  Faq questions", async()=>{
//         const result = await store.delete(3);
//         expect(result).toEqual({
//             faq_id:3,
//             question: "Effectuez vous des soins la nuit ?",
//             reponse: "La limite des heures de service est 22h",
//             category: "Coiffure"
//         });
//         expect(result.faq_id).toBe(3);
//     });

//     afterAll(async()=>{
//             const conn = await client.connect();
//             await conn.query("DELETE FROM faqs;");
//             await conn.query("ALTER SEQUENCE faqs_faq_id_seq RESTART WITH 1;");
//             conn.release();
//         });
// });