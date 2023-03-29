import {Request, Response} from "express";
import { faqStore,Faq } from "../models/faq";


const faq = new faqStore();

export class faqHandler {
    async create(req:Request,res:Response){
        try{
            const data:Faq = req.body;
            const newfaq =  await faq.create(data);
            res.status(201).json(newfaq);
        }catch(err){
            res.status(500).send(err); 
        }
    }

    async index(req:Request,res:Response){
        try{
            const data = await faq.index();
            return res.status(200).json(data);
        }catch(err){
            res.status(500).send(err); 
        }
    }

    async category(req:Request,res:Response){
        try{
            const category = req.params.category;
            const data = await faq.category(category);
            return res.status(200).json(data);
        }catch(err){
            res.status(500).send(err); 
        }
    }

    async delete(req:Request,res:Response){
        try{
            const id = req.params.id;
            const data  =  await faq.delete(parseInt(id));
            return res.status(200).json(data);
        }catch(err){
            res.status(500).send(err); 
        }
    }
}