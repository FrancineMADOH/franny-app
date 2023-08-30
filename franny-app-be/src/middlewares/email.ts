import  nodemailer from "nodemailer";
import dotenv from "dotenv";

dotenv.config();

//create a transporter
const transporter = nodemailer.createTransport({
    port:465,
    host:"smtp.gmail.com",
    auth:{
        user: process.env.USER_EMAIL,
        pass: process.env.PASSWORD_EMAIL
    },
    secure:true
});

export default transporter;