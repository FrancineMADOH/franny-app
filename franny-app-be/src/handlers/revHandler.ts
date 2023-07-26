import {Request,Response} from "express";
import { revStore, Review } from "../models/review";

const rev = new revStore();

export class revHandler {
    async create(req: Request,res:Response){
        try{
            const data: Review = req.body;
            const new_rev = await rev.create(data);
            res.status(201).json(new_rev);
        }catch(err){
            console.log(err);
            res.json(err);
        }
    }

    async index(req: Request,res:Response){
        try{
            const data = await rev.index();
            res.status(200).json(data);
        }catch(err){
            console.log(err);
            res.json(err);
        }
    }

    async show(req: Request,res:Response){
        try{
            const id = parseInt(req.params.id);
            const up_rev = await rev.show(id);
            res.status(200).json(up_rev);
        }catch(err){
            console.log(err);
            res.json(err);
        }
    }
    
}