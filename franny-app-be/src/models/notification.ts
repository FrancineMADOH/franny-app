import client from "../database";

export type Notification = {
    notif_id:number ,
    date_created:Date ,
    date_resolved:Date ,
    notif_state:string ,
    client_number:string ,
    comment:string,
    perso_name:string
}

export class NotificationStore {

    async create(client_number:string,perso_name:string):Promise<Notification>{
        const conn = await client.connect();
        const sql_query = `INSERT INTO notifications(client_number,perso_name) 
        VALUES($1,$2) RETURNING *;`;
        const result =   await client.query(sql_query,[client_number,perso_name]);
        conn.release();
        return result.rows[0];
    }

    async index():Promise<Notification[]>{
        const conn = await client.connect();
        const sql_query = `SELECT * FROM notifications;`
        const result = await conn.query(sql_query);
        conn.release();
        return result.rows;
    }

    async new_notif(state:string):Promise<Notification[]>{
        const conn = await client.connect();
        const sql_query = `SELECT * FROM notifications WHERE notif_state=$1;`
        const result = await conn.query(sql_query,[state]);
        conn.release();
        return result.rows;
    }

    async resolve(state: string,comment:string,date:string,id:number):Promise<Notification>{
        const conn = await client.connect();
        const sql_query = `UPDATE notifications SET notif_state=$1, comment=$2,date_resolved=$3 
        WHERE notif_id=$4 RETURNING *;
        `
        const result = await client.query(sql_query,[state,comment,date,id]);
        conn.release();
        return result.rows[0];
    }
}