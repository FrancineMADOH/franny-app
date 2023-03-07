import client from "../../database";
import { rdvStore, Rendezvous } from "../../models/rendezvous";

const store = new rdvStore();

const r:Rendezvous = {
    rdvdate:"2023-01-03",
    doneby:10,
    prestation:2,
    rdvstate:1 ,
    rdvcode:"0001YAMOKCOIF",
    rdvtype:1,
    userid:"mail@mail.com" , 
    ville:"Yaounde",
    quartier:"Mokolo"
};

describe("Rendezvous store model definition", async()=>{
    it("Should have a create method", ()=>{
        expect(store.create).toBeDefined();
    });
    it("Should have an index method", ()=>{
        expect(store.index).toBeDefined();
    });
    it("Should have a updte method", ()=>{
        expect(store.update).toBeDefined();
    });
    it("Should have a delete method", ()=>{
        expect(store.delete).toBeDefined();
    });
    it("Should have a category method", ()=>{
        expect(store.category).toBeDefined();
    });
    it("Should have a count method", ()=>{
        expect(store.count).toBeDefined();
    });
    it("Should have a countCancelled method", ()=>{
        expect(store.count).toBeDefined();
    });
    it("Should have a countActive method", ()=>{
        expect(store.stateCount).toBeDefined();
    });
   
});

describe("Rendezvous model tests suite", async()=>{

    beforeAll( async()=>{
            const conn = await client.connect();
            const sql_command =  "INSERT INTO rendezvous(rdvdate,doneby,prestation,rdvstate,rdvcode,rdvtype,userid,ville,quartier) VALUES($1,$2,$3,$4,$5,$6,$7,$8,$9) RETURNING *;";
            await conn.query(sql_command, [
                r.rdvdate,r.doneby,r.prestation, r.rdvstate, r.rdvcode,r.rdvtype,r.userid,r.ville,r.quartier]);
            conn.release();
    });

    it("Create a new rendezvous", async()=>{
        const result = await store.create({
            rdvdate:"2023-03-01",
            doneby:10,
            prestation: 2,
            rdvstate:1 ,
            rdvcode:"0001YAMELONG",
            rdvtype:2,
            userid:"franca@mail.com" , 
            ville:"Yaounde",
            quartier:"Melen"   
        });

        expect(result).toEqual({
            rdv_id: 2,
            rdvdate:"2023-03-01",
            doneby:10,
            prestation: 2,
            rdvstate:1 ,
            rdvcode:"0001YAMELONG",
            rdvtype:2,
            userid:"franca@mail.com" , 
            ville:"Yaounde",
            quartier:"Melen"  
           
        });
    });

    it("Return a list of rendezvous order by date", async()=>{
        const result = await store.index();
        expect(result.length).toBe(2);
    });

    it("Update the selected rdv", async()=>{
        const result = await store.update("2023-03-08",8,2,1,"Mvog-bi",2);
        expect(result).toEqual({
            rdv_id: 2,
            rdvdate:"2023-03-08",
            doneby:8,
            prestation: 2,
            rdvstate:1 ,
            rdvcode:"0001YAMELONG",
            rdvtype:2,
            userid:"franca@mail.com" , 
            ville:"Yaounde",
            quartier:"Mvog-bi"  
           
        });
    });

    it("Return the rdv list by their state", async()=>{
        const result = await store.state(1);
        expect(result.length).toBe(2);
    });

    it("Count all rendezvous", async()=>{
        const result = await store.count();
        expect(result).toEqual({count:"2"});
    });
    it("Count the rdv by their state", async()=>{
        const result = await store.stateCount(1);
        expect(result).toEqual({count:"2"});
    });

    // it("Category method return a list of the rdv by their category", async()=>{
    //     const result = await store.category(1);
    //     //expect(result).toEqual();
    // });

    it("Delete a  Faq questions", async()=>{
        const result = await store.delete(2);
        expect(result).toEqual({
            rdv_id: 2,
            rdvdate:"2023-03-08",
            doneby:8,
            prestation: 2,
            rdvstate:1 ,
            rdvcode:"0001YAMELONG",
            rdvtype:2,
            userid:"franca@mail.com" , 
            ville:"Yaounde",
            quartier:"Mvog-bi"  
        });
        expect(result.rdv_id).toBe(2);
    });

    afterAll(async()=>{
            const conn = await client.connect();
            await conn.query("DELETE FROM rendezvous;");
            await conn.query("ALTER SEQUENCE rendezvous_rdv_id_seq RESTART WITH 1;");
            conn.release();
        });
});