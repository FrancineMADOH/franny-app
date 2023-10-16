import {Request,Response} from "express";
import { revStore, Review } from "../models/review";
import { rdvStore } from "../models/rendezvous";

const rev = new revStore();
const rdv = new rdvStore();

export class revHandler {
    async create(req: Request,res:Response){
        try{
            const data: Review = req.body;
            await rev.create(data);
            await  rdv.review(Number(req.body.rdvid))
            res.status(201).json({message:"Review added!"});
        }catch(err:any){
            console.log(err);
            res.json({message:"An error Occured!",error:err.message});
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