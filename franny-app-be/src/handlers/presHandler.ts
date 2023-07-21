import { Request, Response } from "express";
import { presStore,Prestation } from "../models/prestation";


const pres = new presStore();

export class presHandler {

    async create(req:Request,res:Response){
        try{
            const data:Prestation = req.body;
            await pres.create(data);
            res.status(201).json({message:"Prestation added!"});
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

    async show(req:Request,res:Response){
        const id= req.params.id;
        try{
            const data = await pres.show(Number(id))
            res.status(200).json(data);
        }catch(err){
            console.log(err);
            res.status(500).json(err);
        }
    }

    

    async update(req:Request,res:Response){
        try{
            const id =  parseInt(req.params.id);
            const prestation = req.body.prestation;
            await pres.update(id,prestation);
            res.status(200).json({message:"Prestation updated successfully!"});
        }catch(err:any){
            console.log(err);
            res.status(500).json(err.message);
        }
    }
}