import client from "../database";

export type Rendezvous = {
    rdv_id?: number,
    client_name: string,
    client_phone: number,
    client_email: string,
    rdvdate: string,
    doneby: number,
    prestation: number,
    category:string,
    rdvstate: string,
    rdvcode: string,
    rdvtype: string,
    rdv_price:number,
    ville: string,
    quartier: string,
    comments: string,
    is_review?:boolean,
    payment_method: string,
    payment_date: string,
}
export class rdvStore {

    //create
    async create(r: Rendezvous): Promise<Rendezvous> {
        const conn = await client.connect();
        const sql_command = "INSERT INTO rendezvous(client_name,client_phone,client_email,rdvdate,prestation,category,rdvcode,rdvtype,rdv_price,ville,quartier,comments) VALUES($1,$2,$3,$4,$5,$6,$7,$8,$9,$10,$11,$12) RETURNING *;";
        const result = await client.query(sql_command, [
            r.client_name,
            r.client_phone,
            r.client_email,
            r.rdvdate,
            r.prestation,
            r.category,
            r.rdvcode,
            r.rdvtype,
            r.rdv_price,
            r.ville,
            r.quartier,
            r.comments
        ]);
        conn.release();
        return result.rows[0];
    }

    //index: List of rdv 
    async index(): Promise<Rendezvous[]> {
        const conn = await client.connect();
        const sql_command = "SELECT r.*,b.bname FROM rendezvous r LEFT JOIN beautifyers b ON b.beautif_id = r.doneby ORDER BY CAST(rdvdate AS DATE) DESC;";
        const result = await client.query(sql_command);//INNER JOIN prestations p ON r.prestation = p.pres_id
        conn.release();
        return result.rows;
    }

    //get a single appointment 
    async show(id:number){
        const conn = await client.connect();
        const sql_command = "SELECT r.*,b.bname FROM rendezvous r LEFT JOIN beautifyers b ON b.beautif_id = r.doneby  WHERE rdv_id=$1;";
        const result = await client.query(sql_command,[id]);//LEFT JOIN prestations p ON r.prestation=p.pres_id
        conn.release();
        return result.rows[0];
    }
    //update: Update a rendezvous 
    async update(id:number,r:Rendezvous): Promise<Rendezvous> {
        const conn = await client.connect();
        const sql_command = "UPDATE rendezvous SET client_name=$1,client_phone=$2,client_email=$3,rdvdate=$4,prestation=$5,category=$6,rdvcode=$7,rdvtype=$8,rdv_price=$9,ville=$10,quartier=$11,comments=$12 WHERE rdv_id=13 RETURNING *;";
        const result = await client.query(sql_command, [
            r.client_name,
            r.client_phone,
            r.client_email,
            r.rdvdate,
            r.prestation,
            r.category,
            r.rdvcode,
            r.rdvtype,
            r.rdv_price,
            r.ville,
            r.quartier,
            r.comments, id
        ]);
        conn.release();
        return result.rows[0];
    }

    //assign a rdv to an agent
    async assign(rdv_id:number,doneby:number,rdvstate:string):Promise<void>{
        const conn = await client.connect();
        const sql_command = "UPDATE rendezvous SET doneby=$2,rdvstate=$3 WHERE rdv_id=$1;"
        const result = await conn.query(sql_command,[rdv_id,doneby,rdvstate]);
        conn.release();
        return result.rows[0];
    }

    //make paiement 
    async makepaiement(rdv_id:number,rdvstate:string,pm:string,pdate:string){
        const conn = await client.connect();
        const sql_command = "UPDATE rendezvous SET rdvstate=$2, payment_method=$3,payment_date=$4 WHERE rdv_id=$1;"
        const result = await conn.query(sql_command,[rdv_id,rdvstate,pm,pdate]);
        conn.release();
        return result.rows[0];
    }

    //cancel rdv
    async cancel(rdv_id:number,rdvstate:string,cancellation_reason:string):Promise<void>{
        const conn = await client.connect();
        const sql_command = "UPDATE rendezvous SET rdvstate=$2,cancellation_reason=$3 WHERE rdv_id=$1;"
        const result = await conn.query(sql_command,[rdv_id,rdvstate,cancellation_reason]);
        conn.release();
        return result.rows[0];
    }

    //ser rdv as review
    async review(rdv_id:number):Promise<void>{
        const conn = await client.connect();
        const command = "UPDATE rendezvous SET is_review = true WHERE rdv_id=$1;";
        const result = await conn.query(command,[rdv_id]);
        conn.release();
        return result.rows[0];
    }


    //count: Count the number of rendezvous completed  and thier price
    async count(): Promise<object> {
        const conn = await client.connect();
        const sql_command = " SELECT COUNT(*) FROM rendezvous;";
        const result = await client.query(sql_command);
        conn.release();
        return result.rows[0];
    }
    //select  rendezvous  by it state
    async state(state: number): Promise<Rendezvous[]> {
        const conn = await client.connect();
        const sql_command = "SELECT * FROM rendezvous WHERE rdvstate=$1;";
        const result = await client.query(sql_command, [state]);
        conn.release();
        return result.rows;
    }
    //countState rendezvous by state 
    async stateCount(state: number): Promise<object> {
        const conn = await client.connect();
        const sql_command = "SELECT COUNT(*) FROM rendezvous WHERE rdvstate=$1;";
        const result = await client.query(sql_command, [state]);
        conn.release();
        return result.rows[0];
    }

    //category: get rendezvous by category 
    async category(pres: number): Promise<Rendezvous[]> {
        const conn = await client.connect();
        const sql_command = "SELECT * FROM rendezvous rdv LEFT JOIN prestations p ON p.pres_id = rdv.prestation WHERE rdv.prestation=$1;";
        const result = await client.query(sql_command, [pres]);
        conn.release();
        return result.rows;
    }
    //delete: Delete a rendez vous 
    async delete(id: number): Promise<Rendezvous> {
        const conn = await client.connect();
        const sql_command = "DELETE FROM  rendezvous WHERE rdv_id=$1 RETURNING *; ";
        const result = await client.query(sql_command, [id]);
        conn.release();
        return result.rows[0];
    }


}
