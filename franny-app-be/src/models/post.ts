import client from "../database";

export type Post ={
   
        post_id?:number ,
        title:string ,
        summary:string ,
        content:string ,
        author:number ,
        create_at:string  ,
        illustration:string ,
        slug:string,
        applause:number,
        category :string
     
}

export class postStore {
        //create
        async create(p:Post):Promise<Post>{
                const conn = await client.connect();
                const sql_command = "INSERT INTO posts(post_id,title,summary,content,author,createe_at,illustration,slug,applause,cateegory) VALUES($1,$2,$3,$4,$5,$6,$7,$8,$9) RETURNING *;";
                const result = await conn.query(sql_command,[
                        p.title,
                        p.summary,
                        p.content,
                        p.author,
                        p.create_at,
                        p.illustration,
                        p.slug,
                        p.applause,
                        p.category
                ]);
                conn.release();
                return result.rows[0]; 
        }
//Index
//show
//Delete
//Update
//topten
//topapplause
//recents
//search
//category
}