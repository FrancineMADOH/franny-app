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
        category :string,
        imgcredit:string,
        updated_by:number
     
}

export type Like = {
        id?:number,
        email: string,
        postid: number
}

export class postStore {
        //create
        async create(p:Post):Promise<Post>{
                const conn = await client.connect();
                const sql_command = "INSERT INTO posts(title,summary,content,author,create_at,illustration,slug,applause,category,imgcredit,updated_by) VALUES($1,$2,$3,$4,$5,$6,$7,$8,$9,$10,$11) RETURNING *;";
                const result = await conn.query(sql_command,[
                        p.title,
                        p.summary,
                        p.content,
                        p.author,
                        p.create_at,
                        p.illustration,
                        p.slug,
                        p.applause,
                        p.category,
                        p.imgcredit,
                        p.updated_by
                ]);
                conn.release();
                return result.rows[0]; 
        }

        //Index 
        async index():Promise<Post[]>{
                const conn = await client.connect();
                const sql_command = "SELECT p.*, a.admin_name,a.email,a.twitter_url,a.facebook_url,a.linkedin_url FROM posts p LEFT JOIN admins a ON a.admin_id = p.author ORDER BY CAST(p.create_at AS DATE) DESC ;";
                const result = await conn.query(sql_command);
                conn.release();
                return result.rows;
        }

        //show
        async show(id:number):Promise<Post>{
                const conn = await client.connect();
                const sql_command = "SELECT p.*,a.admin_name,a.email,a.twitter_url,a.facebook_url,a.linkedin_url FROM posts p LEFT JOIN admins a ON p.author = a.admin_id WHERE post_id=$1;";
                const result = await conn.query(sql_command,[id]);
                conn.release();
                return result.rows[0];
        }

        //update
        async update(p:Post,id:number):Promise<Post>{
                const conn = await client.connect();
                const sql_command = "UPDATE posts SET title=$1,summary=$2,content=$3,slug=$4,category=$5,updated_by=$6 WHERE post_id=$7 RETURNING *;";
                const result = await conn.query(sql_command, [
                        p.title,p.summary,p.content,p.slug,p.category,p.updated_by,id
                ]);
                conn.release();
                return result.rows[0];
        }

        //topten
        async topten(id:number):Promise<Post[]>{
                const conn = await client.connect();
                const sql_command = "SELECT * FROM posts ORDER BY (SELECT COUNT(*) FROM comments WHERE blog_post_id=$1) DESC LIMIT 10;";
                const result =  await conn.query(sql_command,[id]); //CAST(create_at AS DATE) DESC LIMIT 10;
                conn.release();
                return result.rows;
        }

        //topapplause
        async topapplause():Promise<Post[]>{
                const conn = await client.connect();
                const sql_command = "SELECT p.*, COUNT(c.*) AS com_num FROM posts p LEFT JOIN  comments c ON  c.blog_post_id = p.post_id  ORDER BY com_num DESC LIMIT 10;";
                const result = await conn.query(sql_command);
                conn.release();
                return result.rows;

        }

        //async applaude():

        //search
        async search(term:string):Promise<Post[]>{
                const conn = await client.connect();
                const sql_command = "SELECT * FROM posts WHERE content LIKE $1 OR title LIKE $1"; 
                const result = await conn.query(sql_command,["%" + term + "%"]);
                conn.release();
                return result.rows;
        }

        //category
        async category(term:string):Promise<Post[]>{
                const conn = await client.connect();
                const sql_command = `SELECT p.*, a.admin_name,a.email,a.twitter_url,a.facebook_url,a.linkedin_url
                FROM posts p LEFT JOIN admins a ON a.admin_id = p.author
                WHERE category = $1;`;
                const result = await conn.query(sql_command,[term]);
                conn.release();
                return result.rows;
        }

        //delete
        async delete(id:number):Promise<Post>{
                const conn = await client.connect();
                const sql_command =  "DELETE FROM posts WHERE post_id = $1 RETURNING *;";
                const result = await conn.query(sql_command,[id]);
                conn.release();
                return result.rows[0];
        }

        //dashboard
        async dashboardKpi():Promise<any>{
                const conn = await client.connect();
                const sql_command = `
                SELECT
                     (SELECT CAST(COUNT(*) AS INTEGER) FROM posts) AS totalPosts,
                     (SELECT CAST(COUNT(*) AS INTEGER) FROM posts WHERE category='Feminity') as feminity,
                     (SELECT CAST(COUNT(*) AS INTEGER) FROM posts WHERE category='Maternity') as maternity,
                     (SELECT CAST(COUNT(*) AS INTEGER) FROM posts WHERE category='Family') as family,
                     (SELECT CAST(COUNT(*) AS INTEGER) FROM comments) AS total_comment,
                     (SELECT CAST(SUM(applause) AS INTEGER) FROM posts) AS total_applause;
                `
                const result = await conn.query(sql_command);
                conn.release();
                return result.rows[0];

        }

        //most commented
        async mostCommented():Promise<any>{
                const conn = await client.connect();
                const sql_command = `
                SELECT  CAST(COUNT(c.comment_body) AS INTEGER) AS total_comment,CAST(COUNT(p.applause) AS INTEGER) AS total_applause,p.title, a.admin_name
                  FROM comments c 
                        LEFT JOIN posts p
                        ON p.post_id = c.blog_post_id
                        LEFT JOIN admins a
                        ON p.author = a.admin_id
                GROUP BY p.title, a.admin_name
                ORDER BY total_comment
                LIMIT 5;
                `
                const result = await client.query(sql_command)
                conn.release();
                return result.rows;
        }

        //like an article
        async likeblogpost(id:number):Promise<any>{
                const conn = await client.connect();
                const sql_command = ` UPDATE posts
                                          SET applause = applause + 1
                                      WHERE post_id =$1 ;`
                const result = await conn.query(sql_command,[id]);
                conn.release();
                return result.rows[0]

        }

         //register a like so the same person dont like many time
         async registerLike(id:number,email:string):Promise<Like>{
                const conn = await client.connect();
                const sql_command = "INSERT INTO likes(postid,email) VALUES($1,$2) RETURNING *;";
                const result = await conn.query(sql_command,[
                        id,
                        email
                ]);
                conn.release();
                return result.rows[0]; 
        }

        //get all the likes
        async get_all_likes(id:number):Promise<Like[]>{
                const conn = await client.connect();
                const sql_command = "SELECT * FROM likes WHERE postid=$1;";
                const result = await conn.query(sql_command,[id]);
                conn.release();
                return result.rows;
        }


}