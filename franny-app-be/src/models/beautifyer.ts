import client from "../database";

export type Beautifyer = {
    beautif_id?:number,
    bname:string,
    email:string,
    quartier:string,
    phone:number,
    details:string,
    recruit_date:string,
    ville:string,
    create_by: number,
    beautifcode:string
    
};

export class beautyStore{
    async create(b:Beautifyer):Promise<Beautifyer> {
        const conn = await client.connect();
        const sql_command = "INSERT INTO beautifyers(bname,email,quartier,phone,details,recruit_date,ville,create_by,beautifcode) VALUES($1,$2,$3,$4,$5,$6,$7,$8,$9) RETURNING *;";
        const result = await conn.query(sql_command,[
            b.bname,
            b.email,
            b.quartier,
            b.phone,
            b.details,
            b.recruit_date,
            b.ville,
            b.create_by,
            b.beautifcode
        ]);
        conn.release();
        return  result.rows[0];
    }

    //show
     async show(id:number):Promise<Beautifyer> {
        const conn = await client.connect();
        const sql_command = "SELECT * FROM beautifyers WHERE beautif_id=$1;";
        const result = await conn.query(sql_command,[id]);
        conn.release();
        return  result.rows[0];
    }

 
    //index
    async index():Promise<Beautifyer[]> {
        const conn = await client.connect();
        const sql_command = "SELECT * FROM beautifyers;";
        const result = await conn.query(sql_command,[]);
        conn.release();
        return  result.rows;
    }
    //delete
    async delete(id:number):Promise<Beautifyer> {
        const conn = await client.connect();
        const sql_command = "DELETE FROM beautifyers WHERE beautif_id = $1 RETURNING *;";
        const result = await conn.query(sql_command,[id]);
        conn.release();
        return  result.rows[0];
    }
}