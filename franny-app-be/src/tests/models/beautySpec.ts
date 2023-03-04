import client from "../../database";
import { Beautifyer,beautyStore } from "../../models/beautifyer";

const store = new beautyStore();

const b:Beautifyer = {
    bname:"Anette",
    email:"anette@mail.com",
    quartier:"Bepanda",
    phone:675874587,
    details:"coiffeuse, Maquilleuse",
    recruit_date:"2023-01-01",
    ville:"Douala",
    create_by: "francadmin@gmail.com"
    
};

describe("Beautifyer store model definition", async()=>{
    it("Should have a create method", ()=>{
        expect(store.create).toBeDefined();
    });
    it("Should have an index method", ()=>{
        expect(store.index).toBeDefined();
    });

    it("Should have an index method", ()=>{
        expect(store.index).toBeDefined();
    });

    it("Should have a delete method", ()=>{
        expect(store.delete).toBeDefined();
    });
});

describe("Beautifyer model tests suite", async()=>{

    beforeAll( async()=>{
            const conn = await client.connect();
            const sql_command = "INSERT INTO beautifyers(bname,email,quartier,phone,details,recruit_date,ville,create_by) VALUES($1,$2,$3,$4,$5,$6,$7,$8) RETURNING *;";
            await conn.query(sql_command, [
                b.bname,b.email,b.quartier,b.phone,b.details,b.recruit_date,b.ville,b.create_by
            ]);
            conn.release();
    });

    it("Create a new Beautifyer", async()=>{
        const result = await store.create({
            bname:"Francine",
            email:"francine@mail.com",
            quartier:"Mvog-betsi",
            phone:675874587,
            details:"coiffeuse, Maquilleuse",
            recruit_date:"2023-01-01",
            ville:"Yaounde",
            create_by: "francadmin@gmail.com"
            
        });

        expect(result).toEqual({
            beautif_id:2,
            bname:"Francine",
            email:"francine@mail.com",
            quartier:"Mvog-betsi",
            phone:675874587,
            details:"coiffeuse, Maquilleuse",
            recruit_date:"2023-01-01",
            ville:"Yaounde",
            create_by: "francadmin@gmail.com"
           
        });
    });
    it("Return a list of  beautifyers", async()=>{
        const result = await store.index();
        expect(result.length).toBe(2);
    });

    it("Return the specified beautifyer", async()=>{
        const result = await store.show(2);
        expect(result).toEqual({
            beautif_id:2,
            bname:"Francine",
            email:"francine@mail.com",
            quartier:"Mvog-betsi",
            phone:675874587,
            details:"coiffeuse, Maquilleuse",
            recruit_date:"2023-01-01",
            ville:"Yaounde",
            create_by: "francadmin@gmail.com"
            
        });
    });

    it("Delete the specified beautifyer", async()=>{
        const result = await store.delete(2);
        console.log(result);
        expect(result).toEqual({
            beautif_id:2,
            bname:"Francine",
            email:"francine@mail.com",
            quartier:"Mvog-betsi",
            phone:675874587,
            details:"coiffeuse, Maquilleuse",
            recruit_date:"2023-01-01",
            ville:"Yaounde",
            create_by: "francadmin@gmail.com"
        });
        expect(result.beautif_id).toBe(2);
    });

    afterAll(async()=>{
            const conn = await client.connect();
            await conn.query("DELETE FROM beautifyers;");
            await conn.query("ALTER SEQUENCE beautifyers_beautif_id_seq RESTART WITH 1;");
            conn.release();
        });
});