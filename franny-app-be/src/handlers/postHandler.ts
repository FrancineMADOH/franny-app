import {Request,Response } from "express";
import { postStore} from "../models/post";

const poststore = new postStore();
 
export class postHandler {
    async create(req:Request, res:Response){
        try{
            const data = req.body;
            const new_post = await poststore.create(data);
            res.status(201);
            res.json(new_post);
        }catch(err){
            console.log(err);
        }
    }

    //index
    async index(req:Request, res:Response){
        try{
            const posts = await poststore.index();
            res.status(200).json(posts);
        }catch(err){
            console.log(err);
        }
    }

    //show
    async show(req:Request, res:Response){
        try{
            const id = parseInt( req.params.id);
            const post = await poststore.show(id);
            res.status(200).json(post);

        }catch(err){
            console.log(err);
        }
    }

    //topten
    async topten(req:Request, res:Response){
        try{
            const posts = await poststore.topten();
            res.status(200);
            res.json(posts);
        }catch(err){
            console.log(err);
        }
    }

     //topapplause
     async topapplause(req:Request, res:Response){
        try{
            const posts = await poststore.topapplause();
            res.status(200).json(posts);
        }catch(err){
            console.log(err);
        }
    }

    //search
    async search(req:Request, res:Response){
        try{
            const term = req.params.term;
            const posts = await poststore.search(term);
            res.status(200).json(posts);
        }catch(err){
            console.log(err);
        }
    }

    //category
    async category(req:Request, res:Response){
        try{
            const category = req.params.category;
            const posts =  await poststore.category(category);
            res.status(200);
            res.json(posts);
        }catch(err){
            console.log(err);
        }
    }


    //update
    async update(req:Request, res:Response){
        try{
            const post = req.body;
            const id = parseInt(req.params.id);
            const post_up = await poststore.update(post,id);
            res.status(200).json(post_up);
        }catch(err){
            console.log(err);
        }
    }

    //delete
    async delete(req:Request, res:Response){
        try{
            const id = parseInt(req.params.id);
            const post = await poststore.delete(id);
            res.status(200).json(post);
        }catch(err){
            console.log(err);
        }
    }
}