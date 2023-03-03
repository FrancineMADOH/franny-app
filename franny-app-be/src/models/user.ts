import client from "../database";
import dotenv from "dotenv";

dotenv.config();

export type User = {
    user_id?: number,
    user_name:string,
    user_email:string
}


export class userStore {

    //create
    async create(user_name:string,user_email:string): Promise<User>{
        try{
            const conn = await client.connect();
            const sql_command = "INSERT INTO users(user_name,user_email) VALUES($1,$2) RETURNING *;";
            const result = await conn.query(sql_command,[user_name,user_email]);
            conn.release();
            return result.rows[0];
        }catch(err){
            throw new Error(`Failed to insert user with email ${user_email}`);
        }
    }

    async index(): Promise<User[]>{
        try{
            const conn = await client.connect();
            const sql_command = "SELECT * FROM users;";
            const result = await conn.query(sql_command);
            conn.release();
            return result.rows;
        }catch(err){
            throw new Error(`Failled to fetch users ${err}`);
        }
    }

    //check

        async check(user_email:string):Promise<User>{
            try {
                const conn = await client.connect();
                const sql_command = "SELECT * FROM users WHERE user_email = ($1);";
                const result = await conn.query(sql_command,[user_email]);
                conn.release();
                return result.rows[0];
            }catch(err){
                throw new Error(`No user with email ${user_email}. ${err}`);
            }
        }
    
    //delete

    async delete(user_id:number): Promise<User>{
        try{
            const conn = await client.connect();
            const sql_command = "DELETE FROM users WHERE user_id = ($1) RETURNING user_id;";
            const result = await conn.query(sql_command,[user_id]);
            conn.release();
            return result.rows[0];
        }catch(err){
            throw new Error(`Failed to delete the user with id ${user_id}. ${err}`);
        }
    }


}
