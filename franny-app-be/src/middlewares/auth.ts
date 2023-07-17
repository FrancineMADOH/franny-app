import {Request, Response,NextFunction } from "express";
import dotenv from "dotenv";
import jwt from "jsonwebtoken";
import { Admin } from "../models/admin";

dotenv.config();

const secretToken = process.env.SECRET_TOKEN as string;

export const genToken = (admin:Admin)=>{
    return jwt.sign({admin},secretToken,{expiresIn:'10h'});
};

 const verifyToken =  (req:Request,res:Response,next:NextFunction)=>{
   
    if (!req.headers.authorization) {
        res.status(401).json({ error: "Acces denied" });
        return false;
      }
      try {
        const authHeader = req.headers.authorization;
        const token = authHeader ? authHeader.split(" ")[1] : "";
        jwt.verify(token, secretToken as unknown as jwt.Secret);
    
        next();
      } catch (error) {
        res.status(401);
      }
};

export default verifyToken;