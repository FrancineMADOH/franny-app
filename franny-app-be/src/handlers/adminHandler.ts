import { Request,Response } from "express";
import { adminStore } from "../models/admin";

const adStore = new adminStore();

export class adminHandler {
    async create(req:Request, res:Response){
        try{
            const data = req.body;
            const new_admin = await adStore.create(data);
            res.status(201);
            res.json(new_admin);
        }catch(err){
            console.log(err);
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
        }
    }

    //update
    async update(req:Request, res:Response){
        try{
            const email = req.body.email;
            const pass = req.body.password;
            const update_admin = await adStore.update(email,pass);
            res.status(200);
            res.json(update_admin);
        }catch(err){
            console.log(err);
        }
    }

    //show
    async show(req:Request, res:Response){
        try{
            const email = req.body.email;
            const admin = await adStore.show(email);
            res.status(200);
            res.json(admin);
        }catch(err){
            console.log(err);
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
        }
    }
}