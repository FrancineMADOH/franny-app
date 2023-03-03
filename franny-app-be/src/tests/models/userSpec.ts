import client from "../../database";
import { User, userStore } from "../../models/user";

const store = new userStore();
const user:User =  {user_name:"francine", user_email:"francine@gmail.com"};

describe("User store defined models", ()=>{
    it("Should have a create method", ()=>{
        expect(store.create).toBeDefined();
    });

    it("Should have an index method", ()=>{
        expect(store.index).toBeDefined();
    }); 

    it("Should have a check method", ()=>{
        expect(store.check).toBeDefined();
    });

    it("Should have a delete method", ()=>{
        expect(store.delete).toBeDefined();
    });
});

describe("User store models test suite", async()=>{
    beforeAll( async()=>{
        const conn = await client.connect();
        const sql_command =  "INSERT INTO users(user_name,user_email) VALUES($1,$2);";
        await conn.query(sql_command, [user.user_name, user.user_email]);
        conn.release();
    });

    it("Check method should return the specified user", async()=>{
        const result = await store.check("faiza@mail.com");
        expect(result).not.toBeDefined();
    });

    it("Create method should add a new user to the db",async()=>{
        const result = await store.create("francine","francinei@gmail.com");
        expect(result).toEqual({user_id:3, user_name:"francine", user_email:"francinei@gmail.com"});
    });

    

    it("Index method return a list of all users", async()=>{
        const result = await store.index();
        expect(result.length).toEqual(2);
    });

    it("Delete methode should remove the specified user", async()=>{
        const result = await store.delete(2);
        expect(result.user_id).toEqual(2);
    });

    afterAll(async()=>{
        const conn = await client.connect();
        await conn.query("DELETE FROM users;");
        await conn.query("ALTER SEQUENCE users_user_id_seq RESTART WITH 1;");
        conn.release();
    });
});