import client from "../../database";
import { Admin, adminStore } from "../../models/admin";
import bcrypt from "bcrypt";
import dotenv from "dotenv";
import _ from "lodash";

dotenv.config();
const {
    BCRYPT_PASSWORD,
    SALT_ROUND
} = process.env;


const store = new adminStore();

const admin:Admin = {
    admin_name:"Francine Idene" ,
    username:"is_fran" ,                               
    twitter_url:"@francinemadoh",                    
    linkedin_url:"@francinemadoh",  
    facebook_url:"@francinemadoh",               
    email:"francine@mail",                 
    admin_password:"admin",               
   // avatar:"file",                     
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
        const sql_command = "INSERT INTO admins(admin_name,username,twitter_url,linkedin_url,facebook_url,email,admin_password,activ_date,superuser) VALUES($1,$2,$3,$4,$5,$6,$7,$8,$9) RETURNING * ;";
        const hashedpw = bcrypt.hashSync(admin.admin_password + BCRYPT_PASSWORD, parseInt(SALT_ROUND as string));
        await conn.query(sql_command,[
        admin.admin_name,
        admin.username,
        admin.twitter_url,
        admin.linkedin_url,
        admin.facebook_url,
        admin.email,
        hashedpw,
        //admin.avatar,
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
           // avatar:"file",
            activ_date:"date-activ",
            superuser:false
        });
        const expectAdmin = _.pick(result, [
            "admin_id",
            "admin_name",
            "username",
            "twitter_url",
            "linkedin_url",
            "facebook_url",
            "email",
            "activ_date",
            "superuser"
        ]);
        const matchingPW = bcrypt.compareSync("admin"+ BCRYPT_PASSWORD,result.admin_password); 
        expect(expectAdmin).toEqual({
            admin_id:3,
            admin_name:"Francine Madoh",
            username:"Franca",
            twitter_url:"twitter_url",
            linkedin_url:"url_linkedin",
            facebook_url:"facebook_url",
            email:"francinemadoh@mail.com",
            activ_date:"date-activ",
            superuser:false
        });
        expect(matchingPW).toBeTrue();
       // expect(result.avatar).toBeInstanceOf(Buffer);
    });

    it("Return a list of admins", async()=>{
        const result = await store.index();
        expect(result.length).toEqual(3);
    });

    it("It Authenticate the admin using email and password", async()=>{
        const result = await store.show("francinemadoh@mail.com","admin");
        const expectAdmin = _.pick(result, [
            "admin_id",
            "admin_name",
            "username",
            "twitter_url",
            "linkedin_url",
            "facebook_url",
            "email",
            "activ_date",
            "superuser"
        ]);
        expect(expectAdmin).toEqual({
            admin_id:3,
            admin_name:"Francine Madoh",
            username:"Franca",
            twitter_url:"twitter_url",
            linkedin_url:"url_linkedin",
            facebook_url:"facebook_url",
            email:"francinemadoh@mail.com",
            activ_date:"date-activ",
            superuser:false
        });
       // expect(result?.avatar).toBeInstanceOf(Buffer);
    });


    it("Update the admin password", async()=>{
        const result = await store.update("francinemadoh@mail.com","new-password");
        const matchingPW = bcrypt.compareSync("new-password"+ BCRYPT_PASSWORD,result.admin_password); 
        expect(matchingPW).toBeTrue();
    });

    
    it("Delete the specified admin", async()=>{
        const result = await store.delete("francinemadoh@mail.com") ;

        const expectAdmin = _.pick(result, [
            "admin_id",
            "admin_name",
            "username",
            "twitter_url",
            "linkedin_url",
            "facebook_url",
            "email",
            "activ_date",
            "superuser"
        ]);
        expect(expectAdmin).toEqual({
            admin_id:3,
            admin_name:"Francine Madoh",
            username:"Franca",
            twitter_url:"twitter_url",
            linkedin_url:"url_linkedin",
            facebook_url:"facebook_url",
            email:"francinemadoh@mail.com",
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