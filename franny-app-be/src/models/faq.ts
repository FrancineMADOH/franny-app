import client from "../database";

export type Faq = {
    faq_id?:number,
    question:string ,
    reponse: string ,
    category:string 
};


export class faqStore {
    //create
    async create(f:Faq):Promise<Faq> {
        const conn = await client.connect();
        const sql_command = "INSERT INTO faqs(question,reponse,category) VALUES($1,$2,$3) RETURNING *;";
        const result = await conn.query(sql_command,[f.question, f.reponse,f.category]);
        conn.release();
        return  result.rows[0];
    }

    //index
    async index():Promise<Faq[]>{
        const conn = await client.connect();
        const sql_command = "SELECT * FROM faqs;";
        const result = await conn.query(sql_command);
        conn.release();
        return result.rows;
    }

    //category
    async category(category:string):Promise<Faq[]>{
        const conn = await client.connect();
        const sql_command = " SELECT * FROM faqs WHERE category = $1;";
        const result = await conn.query(sql_command,[category]);
        conn.release();
        return result.rows;
    }

    // delete
    async delete(id:number):Promise<Faq>{
        const conn = await client.connect();
        const sql_command = "DELETE FROM faqs WHERE faq_id=$1 RETURNING *;";
        const result = await conn.query(sql_command,[id]);
        conn.release();
        return result.rows[0];
    }
}