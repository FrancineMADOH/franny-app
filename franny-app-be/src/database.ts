import { Pool } from "pg";
import dotenv  from "dotenv";

dotenv.config();

const {
    POSTGRES_HOST,
    POSTGRES_DB,
    POSTGRES_USER,
    POSTGRES_PASSWORD,
} = process.env;

const client =   new Pool({
    host:POSTGRES_HOST,
    user:POSTGRES_USER,
    database:POSTGRES_DB,
    password:POSTGRES_PASSWORD
});

export default client;