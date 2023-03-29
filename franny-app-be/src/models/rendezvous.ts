import client from "../database";

export type Rendezvous = {
    rdv_id?: number,
    rdvdate:string,
    doneby:number,
    prestation: number,
    rdvstate:number ,
    rdvcode:string,
    rdvtype:number,
    userid:string , 
    ville:string,
    quartier:string
}

export class rdvStore {

//create
async create(r:Rendezvous):Promise<Rendezvous>{
    const conn = await client.connect();
    const sql_command =  "INSERT INTO rendezvous(rdvdate,doneby,prestation,rdvstate,rdvcode,rdvtype,userid,ville,quartier) VALUES($1,$2,$3,$4,$5,$6,$7,$8,$9) RETURNING *;";
    const result  =  await client.query(sql_command,[
        r.rdvdate,r.doneby,r.prestation, r.rdvstate, r.rdvcode,r.rdvtype,r.userid,r.ville,r.quartier
    ]);
    conn.release();
    return result.rows[0];
}

//index: List of rdv 
async index():Promise<Rendezvous[]>{
    const conn = await client.connect();
    const sql_command =  "SELECT * FROM rendezvous ORDER BY CAST(rdvdate AS DATE) DESC;";
    const result  =  await client.query(sql_command);
    conn.release();
    return result.rows;
}
//update: Update a rendezvous 
async update(rd:string,db:number,type:number,rs:number,q:string,id:number):Promise<Rendezvous>{
    const conn = await client.connect();
    const sql_command =  "UPDATE rendezvous SET rdvdate=$1,doneby=$2,rdvtype=$3,rdvstate=$4,quartier=$5 WHERE rdv_id=$6 RETURNING *;";
    const result  =  await client.query(sql_command,[rd,db,type,rs,q,id]);
    conn.release();
    return result.rows[0];
}

//count: Count the number of rendezvous 
async count():Promise<object>{
    const conn = await client.connect();
    const sql_command =  " SELECT COUNT(*) FROM rendezvous;";
    const result  =  await client.query(sql_command);
    conn.release();
    return result.rows[0];
}
//select  rendezvous  by it state
async state(state:number):Promise<Rendezvous[]>{
    const conn = await client.connect();
    const sql_command =  "SELECT * FROM rendezvous WHERE rdvstate=$1;";
    const result  =  await client.query(sql_command,[state]);
    conn.release();
    return result.rows;
} 
//countState rendezvous by state 
async stateCount(state:number):Promise<object>{
    const conn = await client.connect();
    const sql_command =  "SELECT COUNT(*) FROM rendezvous WHERE rdvstate=$1;";
    const result  =  await client.query(sql_command,[state]);
    conn.release();
    return result.rows[0];
}

//category: get rendezvous by category 
async category(pres:number):Promise<Rendezvous[]>{
    const conn = await client.connect();
    const sql_command =  "SELECT * FROM rendezvous rdv LEFT JOIN prestations p ON p.pres_id = rdv.prestation WHERE rdv.prestation=$1;";
    const result  =  await client.query(sql_command,[pres]);
    conn.release();
    return result.rows;
}
//delete: Delete a rendez vous 
async delete(id: number):Promise<Rendezvous>{
    const conn = await client.connect();
    const sql_command =  "DELETE FROM  rendezvous WHERE rdv_id=$1 RETURNING *; ";
    const result  =  await client.query(sql_command,[id]);
    conn.release();
    return result.rows[0];
}

    
}
