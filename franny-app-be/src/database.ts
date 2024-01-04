import { Pool } from "pg";
import dotenv  from "dotenv";

dotenv.config();

const {
    POSTGRES_HOST,
    POSTGRES_DB,
    POSTGRES_USER,
    POSTGRES_PASSWORD,
    ENV,
    POSTGRES_PORT
} = process.env;

console.log(ENV);

let client = new Pool();

if(ENV==="dev"){

     client =   new Pool({
        host:POSTGRES_HOST,
        user:POSTGRES_USER,
        database:POSTGRES_DB,
        password:POSTGRES_PASSWORD,
        port:Number(POSTGRES_PORT),

    });
    console.log('dev bd connected')
}

if(ENV==="test"){

    client =   new Pool({
       host:POSTGRES_HOST,
       user:POSTGRES_USER,
       database:POSTGRES_DB,
       password:POSTGRES_PASSWORD,
       port:Number(POSTGRES_PORT),
       ssl:true
    
   });
  
}



export default client;