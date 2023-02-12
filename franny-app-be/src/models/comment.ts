import client from "../database";

 export type Comment = {
    comment_id?:number,
    email:string,
    comment_body: string,
    comment_date:string,
    post_id:number
 }

 export class commentStore {
   //create
   async create(c:Comment):Promise<Comment>{
    const conn = await client.connect();
    const sql_command = "INSERT INTO comments(email,comment_body,comment_date,post_id) VALUES($1,$2,$3,$4) RETURNING *;";
    const result = await conn.query(sql_command,[c.email,c.comment_body,c.comment_date,c.post_id]);
    conn.release();
    return result.rows[0];
   }


   //index
   async index():Promise<Comment[]>{
    const conn = await client.connect();
    const sql_command =  "SELECT * FROM comments;";
    const result = await conn.query(sql_command);
    conn.release();
    return result.rows;
   }

   //count
   async count():Promise<number>{
    const conn = await client.connect();
    const sql_command =  "SELECT * FROM comments;";
    const result = await conn.query(sql_command);
    conn.release();
    return result.rowCount;
   }

   //delete
   async delete(comment_id:number):Promise<Comment>{
    const conn = await client.connect();
    const sql_command =  "DELETE FROM comments WHERE comment_id = ($1) RETURNING *;";
    const result = await conn.query(sql_command,[comment_id]);
    conn.release();
    return result.rows[0];
   }
 }