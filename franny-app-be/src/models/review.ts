import client from "../database";

export type Review = {
        review_id?:number ,
        rdvid: number,  
        review_date:string ,               
        note: number,                      
        comment: string                      
    
};

export class revStore{
    //create
    async create(rev:Review):Promise<Review>{
        const conn = await client.connect();
        const sql_command = "INSERT INTO reviews(rdvid,review_date,note,comment) VALUES($1,$2,$3,$4) RETURNING *;";
        const result =  await conn.query(sql_command,[
            rev.rdvid,rev.review_date,rev.note,rev.comment
        ]);
        conn.release();
        return result.rows[0];
    }
    //index

    async index():Promise<Review[]>{
        const conn = await client.connect();
        const sql_command = "SELECT * FROM reviews ORDER BY CAST(review_date AS DATE);";
        const result =  await conn.query(sql_command);
        conn.release();
        return result.rows;
    }
    //show

    async show(id:number):Promise<Review>{
        const conn = await client.connect();
        const sql_command = "SELECT * FROM reviews WHERE review_id=$1;";
        const result =  await conn.query(sql_command,[id]);
        conn.release();
        return result.rows[0];
    }
    //category
}
