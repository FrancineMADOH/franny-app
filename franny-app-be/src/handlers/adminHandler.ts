import { Request,Response } from "express";
import dotenv from "dotenv";
import { adminStore, Admin } from "../models/admin";
import { genToken } from "../middlewares/auth";
import { signupValidation, signinValidation, resetPasswordValidation } from "../middlewares/validation";

dotenv.config();
const adStore = new adminStore();

export class adminHandler {

    async create(req:Request, res:Response){
      
        try{
            const {error} = signupValidation(req.body);
            if(error) return res.status(400).send(error.details[0].message);
            
            // if(!req.file){
            //     return res.status(400).send("Please upload a profile picture");
            // }
            // const img = req.file.path;
            // const encode_image = img?.toString();
            // const avatar  = {
            //     data: Buffer.from(encode_image,"base64"),
            //     contentType: req.file.mimetype
            // };
            // console.log(avatar);

            const admin:Admin = {
                admin_name:req.body.admin_name ,
                username:req.body.username ,                               
                twitter_url:req.body.twitter_url,                    
                linkedin_url:req.body.linkedin_url,  
                facebook_url:req.body.facebook_url,               
                email:req.body.email,                 
                admin_password:req.body.admin_password,               
               // avatar:req.body.avatar,                     
                //activ_date:req.body.activ_date,              
                superuser:false
            }; 
            await adStore.create(admin);
            //const token = genToken(new_admin);
            //res.json(token);
           res.status(201).json({"message":"Account successfully created"});
           
        }catch(err){
            console.log(err);
            res.status(500).json(err);
        }
    }

    //index
    async index(req:Request, res:Response){
        try{
            const admins = await adStore.index();
            res.status(200);
            res.json(admins);
        }catch(err){
            console.log(err);
            res.status(500).json(err);
        }
    }

     //show
     async show(req:Request, res:Response){
        try{
            const {error} = signinValidation(req.body);
            if(error) return res.status(400).send(error.details[0].message);
            const email = req.body.email;
            const pass = req.body.admin_password;
            const admin = await adStore.show(email,pass);

            if(admin){
                const token = genToken(admin);
                console.log("auth succeed!");
                res.status(200).json(token);
            } else {
                 res.status(401).send("Invalid Email/Password combination");
            }
           
        }catch(err){
            console.log(err);
            res.status(401).json(`Access denied ${err}`);
        }
    }

    //update
    async update(req:Request, res:Response){
        try{
            const {error} = resetPasswordValidation(req.body);
            if(error) return res.status(400).send(error.details[0].message);

            const email = req.body.email;
            const pass = req.body.password;
            const update_admin = await adStore.update(email,pass);
            res.status(200);
            res.json(update_admin);
        }catch(err){
            console.log(err);
            res.status(500).json(err);
        }
    }

    //delete
    async delete(req:Request, res:Response){
        try{
            const email = req.body.email;
            const del_admin = await adStore.delete(email);
            res.status(200);
            res.json(del_admin);
        }catch(err){
            console.log(err);
            res.status(500).json(err);
        }
    }
}