import  {Request, Response} from "express";
import { commentStore } from "../models/comment";

const comStore = new commentStore();

export class commentHandler {

    async create(req:Request, res:Response){
        try{
            const data = req.body;
            const new_comment  =  await comStore.create(data);
            res.status(201);
            res.json(new_comment);
        }catch(err){
            console.log(err);
        }
    }

    //index
    async index(req:Request, res:Response){
        try{
            const comments =  await comStore.index(1);
            res.json(comments);
        }catch(err){
            console.log(err);
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
        }
    }

    //delete
    async delete(req:Request, res:Response){
        try{
            const del_article = await comStore.delete(1);
            res.json(del_article);
        }catch(err){
            console.log(err);
        }
    }

}
