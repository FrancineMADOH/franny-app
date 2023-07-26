import { Request, Response } from "express";
import { rdvStore,Rendezvous } from "../models/rendezvous";

const rdv = new rdvStore();


export class rdvHandler {

    //create rdv 
    async create(req:Request,res:Response){
        try{
            const data:Rendezvous = req.body;
            const newRdv = await rdv.create(data);
            res.status(201).json({message:"Appointement scheduled!", data:newRdv});
        }catch(err:any){
            res.status(500).json(err.message);
        }
    }

    //rdv list
    async index(req:Request,res:Response){
        try{
            const rendezvous = await rdv.index();
            res.status(200).json(rendezvous);
        }catch(err){
            console.log(err);
            res.status(500).json(err);
        }
    }

    //get a single rdv
    async show(req:Request,res:Response){
        try{
            const rendezvous = await rdv.show(Number(req.params.id)) ;
            res.status(200).json(rendezvous);
        }catch(err){
            console.log(err);
            res.status(500).json(err);
        }
    }

    async update(req:Request,res:Response){
        try{
            
            const  rdv_id =  parseInt(req.params.id);
            const rdv_up:Rendezvous = req.body;
            await rdv.update(rdv_id,rdv_up)
            res.status(200).json({message:"Appointment updated !"});
        }catch(err:any){
            console.log(err);
            res.status(500).json(err);
        }
    }

    //assign
    async assign(req:Request,res:Response){
        try{
            const  rdv_id =  parseInt(req.params.id);
            const  doneby = Number(req.body.doneby);
            const  rdvstate = req.body.rdvstate;
            await rdv.assign(rdv_id,doneby,rdvstate)
            res.status(200).json({message:"Appointment assigneg to Beautifyer!"});
        }catch(err:any){
            console.log(err);
            res.status(500).json(err.message);
        }
    }
    //cancel

    async cancel(req:Request,res:Response){
        try{
            const  rdv_id =  parseInt(req.params.id);
            const  cancellation_reason = req.body.doneby;
            const  rdvstate = req.body.rdvstate;
            await  rdv.cancel(rdv_id,rdvstate,cancellation_reason);
            res.status(200).json({message:"Appointment Cancelled!"});
        }catch(err:any){
            console.log(err);
            res.status(500).json(err.message);
        }
    }

    async count(req:Request,res:Response){
        try{
            const rdvs = await rdv.count();
            res.status(200).json(rdvs);
        }catch(err){
            console.log(err);
            res.status(500).json(err);
        }
    }

    async state(req:Request,res:Response){
        try{
            const state = parseInt(req.params.state);
            const state_rdv = await rdv.state(state);
            res.status(200).json(state_rdv);
        }catch(err){
            console.log(err);
            res.status(500).json(err);
        }
    }

    async stateCount(req:Request,res:Response){
        try{
            const state = parseInt(req.params.state);
            const state_rdv = await rdv.state(state);
            res.status(200).json(state_rdv);
        }catch(err){
            console.log(err);
            res.status(500).json(err);
        }
    }


    // async category(req:Request,res:Response){
    //     try{
    //         const data:Rendezvous = req.body;
    //         const new_rdv = await rdv.create(data);
    //         res.status(201).json(rdv);
    //     }catch(err){
    //         console.log(err);
    //         res.status(500).json(err);
    //     }
    // }

    async delete(req:Request,res:Response){
        try{
            const id = parseInt(req.params.id);
            const del_rdv = await rdv.delete(id);
            res.status(200).json(del_rdv);
        }catch(err){
            console.log(err);
            res.status(500).json(err);
        }
    }
}