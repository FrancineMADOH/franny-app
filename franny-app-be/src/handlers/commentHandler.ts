import  {Request, Response} from "express";
import { commentStore } from "../models/comment";
import { commentValidation } from "../middlewares/validation";

const comStore = new commentStore();

export class commentHandler {

    async create(req:Request, res:Response){
        try{
            const {error } = commentValidation(req.body.comment);
            if(error) return res.status(400).send(error.details[0].message);
            const data = req.body.comment;
            const new_comment  =  await comStore.create(data);
            res.status(201);
            res.json({data: new_comment,message:"Comment added!"});
        }catch(err){
            console.log(err);
            res.status(500).json(err);
        }
    }

    //index
    async index(req:Request, res:Response){
        const post = Number(req.params.id)
        try{
            const comments =  await comStore.index(post);
            res.json(comments);
        }catch(err){
            console.log(err);
            res.status(500).json(err);
        }
    }

    //count
    async count(req:Request, res:Response){
        try{
            const comment_count =  await comStore.count(1);
            console.log(comment_count);
            res.json(comment_count);
        }catch(err){
            console.log(err);
            res.status(500).json(err);
        }
    }

    //delete
    async delete(req:Request, res:Response){
        const id = Number(req.params.id);
        try{
             await comStore.delete(id);
            res.json({message:"Comment successfully deleted"});
        }catch(err){
            console.log(err);
            res.status(500).json(err);
        }
    }

}
