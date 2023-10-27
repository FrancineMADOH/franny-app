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
        const sql_command = " SELECT rev.*, b.bname, r.rdvcode,r.client_name FROM reviews rev LEFT JOIN rendezvous r ON r.rdv_id = rev.rdvid LEFT JOIN beautifyers b ON r.doneby = b.beautif_id ORDER BY CAST(rev.review_date AS DATE);";
        const result =  await conn.query(sql_command);
        conn.release();
        return result.rows;
    }
    //show

    async show(id:number):Promise<Review>{
        const conn = await client.connect();
        const sql_command = `
        SELECT r.*, rdv.client_name,b.bname FROM reviews r 
        LEFT JOIN rendezvous rdv ON  r.rdvid = rdv.rdv_id 
        LEFT JOIN beautifyers b ON rdv.doneby = b.beautif_id
        WHERE review_id=$1;
        ` 
        const result =  await conn.query(sql_command,[id]);
        conn.release();
        return result.rows[0];
    }
    //category
}
