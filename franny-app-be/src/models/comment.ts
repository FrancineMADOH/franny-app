import client from "../database";

 export type Comment = {
    comment_id?:number,
    email:string,
    comment_body: string,
    comment_date:string,
    user_name:string,
    blog_post_id:number
 }

 export class commentStore {
   //create
   async create(c:Comment):Promise<Comment>{
    const conn = await client.connect();
    const sql_command = "INSERT INTO comments(email,comment_body,comment_date,user_name, blog_post_id) VALUES($1,$2,$3,$4,$5) RETURNING *;";
    const result = await conn.query(sql_command,[c.email,c.comment_body,c.comment_date,c.user_name,c.blog_post_id]);
    conn.release();
    return result.rows[0];
   }


   //index
   async index(post:number):Promise<Comment[]>{
    const conn = await client.connect();
    const sql_command =  "SELECT * FROM comments WHERE  blog_post_id = $1 ORDER BY CAST(comment_date AS DATE) DESC;";
    const result = await conn.query(sql_command,[post]);
    conn.release();
    return result.rows;
   }

   //count
   async count(post:number):Promise<number>{
    const conn = await client.connect();
    const sql_command =  "SELECT COUNT(*) FROM comments WHERE  blog_post_id = $1;";
    const result = await conn.query(sql_command,[post]);
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