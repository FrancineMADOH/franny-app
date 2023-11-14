import { Request,Response } from "express";

import { NotificationStore , Notification} from "../models/notification";

const notif = new NotificationStore();

export class NotificationHandler{

    async create(req:Request,res:Response){
        const client_number = req.body.phone;

        try {
            await notif.create(client_number);  
            res.status(200).json({message:"New notification"});
        } catch (err) {
            console.log(err);
            res.status(500).json({message:"Internal server error"});   
        }
    }

    async index(req:Request,res:Response){

        try {
            const notifs = await  notif.index();
            res.status(200).json(notifs);
        } catch (err) {
            console.log(err);
            res.status(500).json({message:"Internal server error"});
            
        }
    }

    async new(req:Request,res:Response){
        const state =  'new';
        try {
            const notifs = await  notif.new_notif(state) ;
            res.status(200).json(notifs);
        } catch (err) {
            console.log(err);
            res.status(500).json({message:"Internal server error"})
            
        }
    }
    async resolve(req:Request,res:Response){
        const comment = req.body.comment;
        const state = req.body.state;
        const date = new Date().toISOString();
        const id = Number(req.params.id);
        try {
            await notif.resolve(state,comment,date,id);
            res.status(200).json({message:'Notification resolved'});    
        } catch (err) {
            console.log(err);
            res.status(500).json({message:"Internal server error"});   
        }
    }

}