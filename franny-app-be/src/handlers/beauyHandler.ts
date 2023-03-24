import { Request,Response } from "express";
import { Beautifyer,beautyStore } from "../models/beautifyer";

const beauty = new beautyStore();

export class beautyHandler {
    async create(req:Request,res:Response){
        try{
            const data:Beautifyer = req.body;
            const newbeautif = await beauty.create(data);
            res.status(201).json(newbeautif);
        }catch(err){
            console.log(err);
            res.send(500).json(err);

        }
    }

    async show(req:Request,res:Response){
        try{
            const id = req.params.id;
            const up_beau = await beauty.show(parseInt(id));
            res.status(200).json(up_beau);
        }catch(err){
            console.log(err);
            res.send(500).json(err);

        }
    }

    async index(req:Request,res:Response){
        try{
            const data =  await beauty.index();
            res.status(200).json(data);
        }catch(err){
            console.log(err);
            res.send(500).json(err);

        }
    }

    async delete(req:Request,res:Response){
        try{
            const id = parseInt(req.params.id);
            const del = await beauty.delete(id);
            res.status(200).json(del);

        }catch(err){
            console.log(err);
            res.send(500).json(err);
        }
    }
}