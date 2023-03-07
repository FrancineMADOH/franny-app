import client from "../../database";
import { revStore,Review } from "../../models/review";


const store = new revStore();

const rev:Review = {
    rdvid: 1,  
    user_id: "francine@mail.com",           
    done_by:1 ,                  
    review_date:"2023-03-10" ,               
    note: 5,                      
    comment: "La seance etait super relaxante et la prestatrice tres gentille"     
};

describe("Faq store model definition", async()=>{
    it("Should have a create method", ()=>{
        expect(store.create).toBeDefined();
    });
    it("Should have an index method", ()=>{
        expect(store.index).toBeDefined();
    });
    it("Should have an index method", ()=>{
        expect(store.show).toBeDefined();
    });
   
});

describe("Review model tests suite", async()=>{

    beforeAll( async()=>{
            const conn = await client.connect();
            const sql_command = "INSERT INTO reviews(rdvid,user_id,done_by,review_date,note,comment) VALUES($1,$2,$3,$4,$5,$6) RETURNING *;";
            await conn.query(sql_command,[
                rev.rdvid, rev.user_id,rev.done_by,rev.review_date,rev.note,rev.comment
            ]);
            conn.release();
    });

    it("Create method create a new review", async()=>{
        const result = await store.create({
            rdvid: 2,  
            user_id: "grande@mail.com",           
            done_by:1 ,                  
            review_date:"2023-03-31" ,               
            note: 1,                      
            comment: "Prestatrice en retard"     
        });

        expect(result).toEqual({
            review_id:2,
            rdvid: 2,  
            user_id: "grande@mail.com",           
            done_by:1 ,                  
            review_date:"2023-03-31" ,               
            note: 1,                      
            comment: "Prestatrice en retard"   
        });
    });
    it("Return a list of  Faq questions", async()=>{
        const result = await store.index();
        expect(result.length).toBe(2);
    });

    it("Return a specified review", async()=>{
        const result = await store.show(1);
        expect(result).toEqual({
            review_id:1,
            rdvid: 1,  
            user_id: "francine@mail.com",           
            done_by:1 ,                  
            review_date:"2023-03-10" ,               
            note: 5,                      
            comment: "La seance etait super relaxante et la prestatrice tres gentille" 
        });
    });

    afterAll(async()=>{
            const conn = await client.connect();
            await conn.query("DELETE FROM reviews;");
            await conn.query("ALTER SEQUENCE reviews_review_id_seq RESTART WITH 1;");
            conn.release();
        });
});