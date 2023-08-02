import joi from "joi";
import { Admin } from "../models/admin";
import { Post } from "../models/post";
import { Comment } from "../models/comment";
import express, {Request, Response} from 'express';


export  const signupValidation = (data:Admin)=>{
    const schema =  joi.object({
        admin_id: joi.number() ,
        admin_name: joi.string().min(6).required() ,
        username: joi.string().min(6).required(),                               
        twitter_url:joi.string().uri(),                    
        linkedin_url:joi.string().uri(),  
        facebook_url:joi.string().uri(),               
        email:joi.string().min(6).required().email(),                 
        admin_password:joi.string().min(8).required(),
        avatar:  joi.string().optional(),
        //activ_date: joi.string().required(),
        superuser: joi.boolean()          
    });
    return schema.validate(data);
};

export const signinValidation = (data:Admin)=>{
    const schema =  joi.object({
        email:joi.string().min(6).required().email(),                 
        admin_password:joi.string().min(8).required(),               
    });
    return schema.validate(data);
};

export const resetPasswordValidation  = (data:Admin)=>{
    const schema =  joi.object({
        email: joi.string().min(6).required().email(),
        password: joi.string().min(8).required(),
    });
    return schema.validate(data);
};

//validate posts
export const postValidation = (data:Post)=>{
    const schema = joi.object({
        post_id: joi.number(),
        title: joi.string().max(150).required(),
        summary:joi.string().max(300).required(),
        content:joi.string().max(4000).required(),
        author:  joi.number(),
        create_at: joi.string().max(20).required(),
        illustration: joi.string().optional(),
        slug: joi.string().max(150).required(),
        applause: joi.number().optional(),
        category: joi.string().max(10).required()
    });
    
    return schema.validate(data);
};

export const commentValidation = (data:Comment)=>{
    const schema = joi.object({
   // comment_id: joi.number(),
    email: joi.string().min(6).required().email(),
    comment_body: joi.string().max(150).required(),
    comment_date: joi.string().max(20).required(),
    blog_post_id: joi.number()

});

return schema.validate(data);
};

// //slugify middleware
// export function saveandRedirect(post:Post){
//     return async(req:Request, res:Response)=>{
//         //let post;

//     let slug = slugify(req.body.title, {lower:true, strict:true});

//     const {error} = postValidation(post)
//     if(error) return res.status(400).send(error.details[0].message);

//     //sanitized the request body
//     let sanitizedHtml = await dompurify.sanitize(marked(req.body.content));

//     post.title = req.body.title;
//     post.summary = req.body.summary;
//     post.content = sanitizedHtml;
//     post.category = req.body.category;
//     post.slug = slug;
//     post.create_at = new Date().toLocaleString();
//     } 
// }
