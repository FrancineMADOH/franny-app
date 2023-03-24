import { Request, Response } from "express";
import { presStore,Prestation } from "../models/prestation";


const pres = new presStore();

export class presHandler {

    async create(req:Request,res:Response){
        try{
            const data:Prestation = req.body;
            const new_pres = await pres.create(data);
            res.status(201).json(new_pres);
        }catch(err){
            console.log(err);
            res.status(500).json(err);
        }
    }

    async index(req:Request,res:Response){
        try{
            const data = await pres.index();
            res.status(200).json(data);
        }catch(err){
            console.log(err);
            res.status(500).json(err);
        }
    }

    async update(req:Request,res:Response){
        try{
            const id =  parseInt(req.params.id);
            const price = parseInt(req.params.price);
            const pres_u = await pres.update(price,id);
            res.status(200).json(pres_u);
        }catch(err){
            console.log(err);
            res.status(500).json(err);
        }
    }
}