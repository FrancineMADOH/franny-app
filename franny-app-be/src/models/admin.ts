import client from "../database";

export type Admin = {
    admin_id?:number,
    admin_name:string ,
    username:string ,                               
    twitter_url:string,                    
    linkedin_url:string,  
    facebook_url:string,               
    email:string,                 
    admin_password:string,               
    avatar:string,                     
    activ_date:string,              
    superuser:boolean
}

export class adminStore {

//create
async create(a:Admin):Promise<Admin>{
    const conn = await client.connect();
    const sql_command = "INSERT INTO admins(admin_name,username,twitter_url,linkedin_url,facebook_url,email,admin_password,avatar,activ_date,superuser) VALUES($1,$2,$3,$4,$5,$6,$7,$8,$9,$10) RETURNING * ;";
    const result = await conn.query(sql_command,[
        a.admin_name,
        a.username,
        a.twitter_url,
        a.linkedin_url,
        a.facebook_url,
        a.email,
        a.admin_password,
        a.avatar,
        a.activ_date,
        a.superuser
    ]);
    conn.release();
    return result.rows[0];
}

//index
async index():Promise<Admin[]>{
    const conn = await client.connect();
    const sql_command = "SELECT * FROM admins;";
    const result = await conn.query(sql_command);
    conn.release();
    return result.rows;
}

//update
async update(email:string,pass:string):Promise<Admin>{
    const conn = await client.connect();
    const sql_command = "UPDATE admins SET admin_password = $1 WHERE email = $2 RETURNING *;";
    const result = await conn.query(sql_command, [email,pass]);
    conn.release();
    return result.rows[0];
}

//show
async show(email:string):Promise<Admin>{
    const conn = await client.connect();
    const sql_command = "SELECT * FROM admins WHERE email=$1;";
    const result = await conn.query(sql_command,[email]);
    conn.release();
    return result.rows[0];
}

//delete
async delete(email:string):Promise<Admin>{
    const conn = await client.connect();
    const sql_command = "DELETE FROM admins WHERE email = $1 RETURNING *;";
    const result = await conn.query(sql_command,[email]);
    conn.release();
    return result.rows[0];
}
}