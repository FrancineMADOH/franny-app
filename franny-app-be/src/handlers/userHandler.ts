import {Request,Response} from "express";
import { userStore } from "../models/user";
import transporter from "../middlewares/email";
import dotenv from "dotenv";

dotenv.config();

const usStore = new userStore();

export class userHandler {

    async contactFranny(req:Request,res:Response){
        const from = req.body.from;
        const text = req.body.text;

        try {
            const info = await transporter.sendMail({
                from: process.env.USER_EMAIL,// from, // sender address
                to:process.env.USER_EMAIL, // list of receivers
                subject: "Hello ✔ A user sent you a message!", // Subject line
                text: text, // plain text body
                html: `<p>${text}</p><br/>`
              });
              res.status(200).json({message:"Your message was sent!",infos:info.messageId});
            
        } catch (error) {
            console.log(error);
            res.status(500).json({message:"Error sending email"});
            
        }
        
    }


    async create(req:Request, res:Response){
        try{
            const email = req.body.email;
            const name = req.body.name;
            const check = await usStore.check(email);
            if(check != undefined) return res.status(400).send("Email already exist");

            const new_user  =  await usStore.create(name,email);
            res.status(201);
            res.json(new_user);
        }catch(err){
            console.log(err);
            res.status(500).json(err);
        }
    }

    //index
    async index(req:Request, res:Response){
        try{
            const users = await usStore.index();
            res.status(200);
            res.json(users);
        }catch(err){
            console.log(err);
            res.status(500).json(err);
        }
    }

    //delete
    async delete(req:Request, res:Response){
        try{
            const del_user =  await usStore.delete(1);
            res.status(200);
            res.json(del_user);
        }catch(err){
            console.log(err);
            res.status(500).json(err);
        }
    }

}
