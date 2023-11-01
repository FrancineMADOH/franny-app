import {Request,Response,NextFunction } from "express";
import { Post, postStore} from "../models/post";
import { postValidation } from "../middlewares/validation";
import { uploadillustration } from "../middlewares/upload";
import slugify from "slugify";
import {marked } from "marked";
import {JSDOM} from "jsdom";
import createDomPurify from "dompurify";
const dompurify  = createDomPurify(new JSDOM().window)


const poststore = new postStore();
 
export class postHandler {
    async create(req:Request, res:Response,next:NextFunction){
        uploadillustration.single("illustration")
        console.log(req.file)
    //console.log(req.body.post)
    //uploadillustration(req.body.post.illustration)
    // const {error} = postValidation(req.body.posttitle)
    // let slug =  slugify(req.body.post.title, {lower:true, strict:true});
    // if(error){
    //     return res.status(400).json(error.details[0].message);
    // } 

    // //sanitized the request body
    // let sanitizedHtml =  dompurify.sanitize(marked(req.body.post.content));
    //     const post:Post = {
    //         title : req.body.post.title,
    //         summary : req.body.post.summary,
    //         content : sanitizedHtml,
    //         category : req.body.post.category,
    //         slug : slug,
    //         illustration:req.body.post.illustration,
    //         author: req.body.post.author,
    //         create_at: req.body.post.create_at,
    //         applause:0
    //     }
    
    //     try{
    //         const new_post = await poststore.create(post);
    //         res.status(201).json({message:"Blog post added!"});
    //         //res.redirect(`/posts/${post.post_id}/${post.slug}`)
    //     }catch(err:any){
    //         console.log(err.message);
    //         res.status(500).json({err});
    //     }
    }

        //update
        async update(req:Request, res:Response){
            
                console.log(req.body)
                const {error} = postValidation(req.body.posttitle)
                let slug =  slugify(req.body.post.title, {lower:true, strict:true});
                if(error){
                    return res.status(400).json(error.details[0].message);
                } 
            
                //sanitized the request body
                let sanitizedHtml =  dompurify.sanitize(marked(req.body.post.content));
                    const post:Post = {
                        title : req.body.post.title,
                        summary : req.body.post.summary,
                        content : sanitizedHtml,
                        category : req.body.post.category,
                        slug : slug,
                        illustration:req.body.post.illustration,
                        author: req.body.post.author,
                        create_at: req.body.post.create_at,
                        applause:0
                    }
                    try{  
                const id = parseInt(req.params.id);
                await poststore.update(post,id);
                res.status(200).json({message:"Post updated!"});
            }catch(err){
                console.log(err);
                res.status(500).json(err);
            }
        }

    //index
    async index(req:Request, res:Response){
        try{
            const posts = await poststore.index();
            res.status(200).json(posts);
        }catch(err){
            console.log(err);
            res.status(500).json(err);
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
            res.status(500).json(err);
        }
    }

    //topten
    async topten(req:Request, res:Response){
        const id= Number(req.params.id);
        try{
            const posts = await poststore.topten(id);
            res.status(200);
            res.json(posts);
        }catch(err){
            console.log(err);
            res.status(500).json(err);
        }
    }

     //topapplause
     async topapplause(req:Request, res:Response){
        try{
            const posts = await poststore.topapplause();
            res.status(200).json(posts);
        }catch(err){
            console.log(err);
            res.status(500).json(err);
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
            res.status(500).json(err);
        }
    }

    //category
    async category(req:Request, res:Response){
        try{
            const category = req.params.category;
            const posts =  await poststore.category(category);
            res.status(200).json(posts);
        }catch(err){
            console.log(err);
            res.status(500).json(err);
        }
    }


    //delete
    async delete(req:Request, res:Response){
        try{
            const id = parseInt(req.params.id);
            const post = await poststore.delete(id);
            res.status(200).json({message:"Post deleted!"});
        }catch(err){
            console.log(err);
            res.status(500).json(err);
        }
    }
}