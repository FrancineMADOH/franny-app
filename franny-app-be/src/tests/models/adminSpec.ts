import client from "../../database";
import { Admin, adminStore } from "../../models/admin";

const store = new adminStore();

const admin:Admin = {
    admin_name:"Francine Idene" ,
    username:"is_fran" ,                               
    twitter_url:"@francinemadoh",                    
    linkedin_url:"@francinemadoh",  
    facebook_url:"@francinemadoh",               
    email:"francine@mail",                 
    admin_password:"admin",               
    avatar:"/avatar.jpeg",                     
    activ_date:"2023-01-01",              
    superuser:false
};

describe("Admin store model definition test suite", ()=>{
    it("Should have a create method",()=>{
        expect(store.create).toBeDefined();
    });
    it("Should have an index method",()=>{
        expect(store.index).toBeDefined();
    });
    it("Should have an update method",()=>{
        expect(store.update).toBeDefined();
    });
    it("Should have a show method",()=>{
        expect(store.show).toBeDefined();
    });
    it("Should have a delete method",()=>{
        expect(store.delete).toBeDefined();
    });
});

describe("Admin store test suite", async()=>{
    beforeAll(async()=>{
        const conn = await client.connect();
        const sql_command = "INSERT INTO admins(admin_name,username,twitter_url,linkedin_url,facebook_url,email,admin_password,avatar,activ_date,superuser) VALUES($1,$2,$3,$4,$5,$6,$7,$8,$9,$10) RETURNING * ;";
        await conn.query(sql_command,[
        admin.admin_name,
        admin.username,
        admin.twitter_url,
        admin.linkedin_url,
        admin.facebook_url,
        admin.email,
        admin.admin_password,
        admin.avatar,
        admin.activ_date,
        admin.superuser
    ]);
    conn.release();
    });

    it("Create a new admin user", async()=>{
        const result = await  store.create({
            admin_name:"Francine Madoh",
            username:"Franca",
            twitter_url:"twitter_url",
            linkedin_url:"url_linkedin",
            facebook_url:"facebook_url",
            email:"francinemadoh@mail.com",
            admin_password:"admin",
            avatar:"avatar",
            activ_date:"date-activ",
            superuser:false
        });
        expect(result).toEqual({
            admin_id:2,
            admin_name:"Francine Madoh",
            username:"Franca",
            twitter_url:"twitter_url",
            linkedin_url:"url_linkedin",
            facebook_url:"facebook_url",
            email:"francinemadoh@mail.com",
            admin_password:"admin",
            avatar:"avatar",
            activ_date:"date-activ",
            superuser:false
        });
    });

    it("Return a list of admins", async()=>{
        const result = await store.index();
        expect(result.length).toEqual(2);
    });
    it("It show the specified admin", async()=>{
        const result = await store.show("francinemadoh@mail.com");
        expect(result).toEqual({
            admin_id:2,
            admin_name:"Francine Madoh",
            username:"Franca",
            twitter_url:"twitter_url",
            linkedin_url:"url_linkedin",
            facebook_url:"facebook_url",
            email:"francinemadoh@mail.com",
            admin_password:"admin",
            avatar:"avatar",
            activ_date:"date-activ",
            superuser:false
        });
    });


    it("update the admin password", async()=>{
        const result = await store.update("new-password", "francinemadoh@mail.com");
        expect(result.admin_password).toBe("new-password");
    });

    
    it("Delete the specified admin", async()=>{
        const result = await store.delete("francinemadoh@mail.com") ;
        expect(result).toEqual({
            admin_id:2,
            admin_name:"Francine Madoh",
            username:"Franca",
            twitter_url:"twitter_url",
            linkedin_url:"url_linkedin",
            facebook_url:"facebook_url",
            email:"francinemadoh@mail.com",
            admin_password:"new-password",
            avatar:"avatar",
            activ_date:"date-activ",
            superuser:false
        });
    });

    afterAll(async()=>{
        const conn = await client.connect();
        await conn.query("DELETE FROM admins;");
        await conn.query("ALTER SEQUENCE admins_admin_id_seq RESTART WITH 1;");
        conn.release();
    });

});