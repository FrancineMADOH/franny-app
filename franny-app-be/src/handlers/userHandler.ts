import {Request,Response} from "express";
import { userStore } from "../models/user";

const usStore = new userStore();

export class userHandler {

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
