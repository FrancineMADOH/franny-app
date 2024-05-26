import e, { Request,Response } from "express";
import { Beautifyer,beautyStore } from "../models/beautifyer";

const beauty = new beautyStore();

export class beautyHandler {
    async create(req:Request,res:Response){
        try{
            const data:Beautifyer = req.body;
            await beauty.create(data);
            res.status(201).json({message:"Beauty Agent Succesfully Created"});
            
        }catch(err){
            console.log(err);
            res.status(500).json(err);

        }
    }

    async show(req: Request, res: Response){
        try {
            const id = parseInt(req.params.id);
            const beautif = await beauty.show(id);
            res.status(200).json(beautif);      
        } catch (err) {
            console.log(err);
            res.status(500).json(err);
            
        }
    }

    async update(req:Request,res:Response){
        try{
            const id = parseInt(req.params.id);
            const beautif = req.body.beauty;
            await beauty.update(id,beautif);
            res.status(200).json({message:"Agent succefully updated"});
        }catch(err){
            console.log(err);
            res.status(500).json(err);
        }
    }

    async index(req:Request,res:Response){
        // const page:number = Number(req.query.page);
        // const limit = Number(req.query.limit);
        // const startIndex = page - 1 * limit;
        // const endIndex  =  page * limit ;
        try{
            const data =  await beauty.index();
            //const result = data.slice(startIndex,endIndex);
            res.status(200).json(data);
        }catch(err){
            console.log(err);
            res.status(500).json(err);

        }
    }

    async delete(req:Request,res:Response){
        try{
            const id = parseInt(req.params.id);
            const del = await beauty.delete(id);
            res.status(200).json(del);

        }catch(err){
            console.log(err);
            res.status(500).json(err);
        }
    }
}