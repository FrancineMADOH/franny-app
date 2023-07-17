import client from "../database";

export type Prestation = {

    pres_id?:number ,
    title: string,
    price:number,
    duration: string,
    category: string ,
    seance:string,
    gold :string,
    premium:string

}

export class presStore{
     //create
     async create(p:Prestation):Promise<Prestation>{
        const conn = await client.connect();
        const sql_query = "INSERT INTO prestations(title,price,duration,category,seance,gold,premium) VALUES($1,$2,$3,$4,$5,$6,$7) RETURNING *;";
        const result = await conn.query(sql_query,[
            p.title,p.price,p.duration,p.category,p.seance,p.gold,p.premium
        ]);
        conn.release();
        return result.rows[0];
    }

     //index
     async index():Promise<Prestation[]>{
        const conn = await client.connect();
        const sql_query =  "SELECT * FROM prestations;";
        const result = await conn.query(sql_query);
        conn.release();
        return result.rows;
    }

    //get a single prestation
    async show(id:number):Promise<Prestation>{
        const conn = await client.connect();
        const sql_query = "SELECT * FROM prestations WHERE pres_id=$1;";
        const result = await conn.query(sql_query,[id]);
        conn.release();
        return result.rows[0]
    }

    //update
    async update(id:number,p:Prestation):Promise<Prestation>{
        const conn = await client.connect();
        const sql_query = "UPDATE prestations SET title=$2,price=$3,duration=$4,category=$5,seance=$6,gold=$7,premium=$8 WHERE pres_id=$1 RETURNING *;";
        const result = await conn.query(sql_query, [id,
            p.title,
            p.price,
            p.duration,
            p.category,
            p.seance,
            p.gold,
            p.premium
        ]);
        conn.release();
        return result.rows[0];
    }
}