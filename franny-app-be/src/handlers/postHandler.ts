import {Request,Response,NextFunction } from "express";
import { Post, postStore} from "../models/post";
import { postValidation } from "../middlewares/validation";
import slugify from "slugify";
import {marked } from "marked";
import {JSDOM} from "jsdom";
import createDomPurify from "dompurify";
const dompurify  = createDomPurify(new JSDOM().window)

marked.use({mangle: false,headerIds: false});
const poststore = new postStore();

export class postHandler {
    

    async create(req:Request, res:Response,next:NextFunction){
        console.log(req.file)

        if (!req.file) {
            console.log("No file received");
            return res.json({
              message: "Please upload an illustration for your post"
            });
        }

    const {error} = postValidation(req.body.title)
    let slug =  slugify(req.body.title, {lower:true, strict:true});
    if(error){
        return res.status(400).json({message:error.details[0].message});
    } 
   
        

    const host = req.headers.host;
    const filePath = req.protocol + "://" + host + '/' + req.file.path.split("\\").join('/');
    //sanitized the request body
    let sanitizedHtml =  dompurify.sanitize(marked(req.body.content));
        const post:Post = {
            title : req.body.title,
            summary : req.body.summary,
            content : sanitizedHtml,
            category : req.body.category,
            slug : slug,
            illustration:filePath,
            author: Number(req.body.author),
            create_at: req.body.create_at,
            imgcredit: req.body.imgcredit,
            applause:0
        }
    
        try{
            await poststore.create(post);
            console.log('post added!')
            return res.status(201).json({message:"Blog post added!"});
            //res.redirect(`/posts/${post.post_id}/${post.slug}`)
        }catch(err:any){
            console.log(err.message);
            return res.status(500).json({message:"Internal server error"});
        }
    }

    //update
    async update(req:Request, res:Response){
            
                console.log(req.body)
                const {error} = postValidation(req.body.posttitle)
                let slug =  slugify(req.body.title, {lower:true, strict:true});
                // if(error){
                //     return res.status(400).json({message:error.details[0].message});
                // } 
                const host = req.headers.host;
                const filePath = req.protocol + "://" + host + '/' + req.file?.path.split("\\").join('/');

                //sanitized the request body
                let sanitizedHtml =  dompurify.sanitize(marked(req.body.content));
                const post:Post = {
                    title : req.body.title,
                    summary : req.body.summary,
                    content : sanitizedHtml,
                    category : req.body.category,
                    slug : slug,
                    illustration:filePath || req.body.illustration,
                    author: Number(req.body.author),
                    create_at: req.body.create_at,
                    imgcredit: req.body.imgcredit,
                    applause:0
                }
                 console.log(req.params.id)

                
                
              
                try{  
                // const id = parseInt(req.params.id);
                // await poststore.update(post,id);
                res.status(200).json({message:"Post updated!"});
            }catch(err){
                console.log(err);
                res.status(500).json({message:"Internal server error"});
            }
        }

    //index
    async index(req:Request, res:Response){
        try{
            const posts = await poststore.index();
            res.status(200).json(posts);
        }catch(err){
            console.log(err);
            res.status(500).json({message:"Internal server error"});
        }
    }

    //show
    async show(req:Request, res:Response){
        try{
            const id = parseInt( req.params.id);
            const post = await poststore.show(id);
            console.log(post)
            res.status(200).json(post);

        }catch(err){
            console.log(err);
            res.status(500).json({message:"Internal server error"});

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
            res.status(500).json({message:"Internal server error"});
        }
    }

     //topapplause
     async topapplause(req:Request, res:Response){
        try{
            const posts = await poststore.topapplause();
            res.status(200).json(posts);
        }catch(err){
            console.log(err);
            res.status(500).json({message:"Internal server error"});

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
            res.status(500).json({message:"Internal server error"});

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
            res.status(500).json({message:"Internal server error"});
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
            res.status(500).json({message:"Internal server error"});
        }
    }

    //dashboard kpi
    async blogdashboard(req: Request, res: Response){
        try {
            const kpi = await poststore.dashboardKpi();
            res.status(200).json(kpi);
            
        } catch (err) {
            console.log(err);
            res.status(500).json({message:"Internal server error"});
            
        }
    }

    //articles ranking
    async mostcommented(req: Request, res: Response){
        try {
            const mostreaded = await poststore.mostCommented();
            res.status(200).json(mostreaded);
            
        } catch (err) {
            console.log(err);
            res.status(500).json({message:"Internal server error"});
            
        }
    }

    //like blogpost
    async likebp(req: Request, res: Response){
        const postId = parseInt(req.params.id);
        try {
            const result = await poststore.likeblogpost(postId);
            res.status(200).json({message:"Liked!"})
            
        } catch (err) {
            console.log(err);
            res.status(500).json({error:"Internal server error"})
            
        }
    }
}