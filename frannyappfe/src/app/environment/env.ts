import dotenv from "dotenv";
  
dotenv.config();

export const environment = {
    production: false,
    baseUrl :  process.env["BASE_URL"],
}