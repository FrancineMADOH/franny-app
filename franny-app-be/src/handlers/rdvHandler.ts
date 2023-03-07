import { Request, Response } from "express";
import { rdvStore,Rendezvous } from "../models/rendezvous";

const rdv = new rdvStore();


export class rdvHandler {
    async create(req:Request,res:Response){
        try{
            const data:Rendezvous = req.body;
            const new_rdv = await rdv.create(data);
            res.status(201).json(new_rdv);
        }catch(err){
            console.log(err);
            res.status(500).json(err);
        }
    }

    async index(req:Request,res:Response){
        try{
            const rendezvous = await rdv.index();
            res.status(200).json(rendezvous);
        }catch(err){
            console.log(err);
            res.status(500).json(err);
        }
    }

    async update(req:Request,res:Response){
        try{
            
            const  rd =  req.params.rd;
            const  db = parseInt(req.params.db);
            const  type = parseInt(req.params.type);
            const  rs= parseInt(req.params.rs);
            const  q= req.params.q;
            const  id= parseInt(req.params.id);
            const up_rdv = await rdv.update(rd,db,type,rs,q,id);
            res.status(200).json(up_rdv);
        }catch(err){
            console.log(err);
            res.status(500).json(err);
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