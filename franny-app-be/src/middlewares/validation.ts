import joi from "joi";
import { Admin } from "../models/admin";
import { Post } from "../models/post";
import { Comment } from "../models/comment";
import slugify from "slugify";


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
        avatar:  joi.binary().optional(),
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
        illustration: joi.string().required(),
        slug: joi.string().max(150).required(),
        applause: joi.number(),
        category: joi.string().max(10).required()
    });
    
    return schema.validate(data);
};

export const commentValidation = (data:Comment)=>{
    const schema = joi.object({
    comment_id: joi.number(),
    email: joi.string().min(6).required().email(),
    comment_body: joi.string().max(150).required(),
    comment_date: joi.string().max(20).required(),
    post_id: joi.number()

});

return schema.validate(data);
};

//slugify middleware
export const slugifyPost = function(post:Post){
    if(post.title){
        post.slug = slugify(post.title, { lower:true, strict:true });
        return post;
    }
    return post;
};