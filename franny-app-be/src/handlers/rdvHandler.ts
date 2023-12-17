import { Request, Response } from "express";
import qr from "qrcode";
import { rdvStore,Rendezvous } from "../models/rendezvous";
import dotenv from "dotenv";
import transporter from "../middlewares/email";
import { beautyStore } from "../models/beautifyer";

dotenv.config();

const rdv = new rdvStore();
const beauty = new beautyStore();


export class rdvHandler {

    //create rdv 
    async create(req:Request,res:Response){
        const url = req.body.url;
        try{
            const data:Rendezvous = req.body;
            const newRdv = await rdv.create(data);
            const code = await qr.toDataURL(`${url}${newRdv.rdv_id}`);
            res.status(201).json({message:"Appointement scheduled!", data:newRdv,qrcode:code});
        }catch(err:any){
            res.status(500).json({message:"Internal server error"});
        }
    }

    //rdv list
    async index(req:Request,res:Response){
        try{
            const rendezvous = await rdv.index();
            res.status(200).json(rendezvous);
        }catch(err){
            console.log(err);
            //res.status(500).json(err);
            res.status(500).json({message:"Internal server error"});
        }
    }

    //get a single rdv
    async show(req:Request,res:Response){
        try{
            const rendezvous = await rdv.show(Number(req.params.id)) ;
            res.status(200).json(rendezvous);
        }catch(err){
            console.log(err);
            //res.status(500).json(err);
            res.status(500).json({message:"Internal server error"});
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
            //res.status(500).json(err);
            res.status(500).json({message:"Internal server error"});
        }
    }

    //assign
    async assign(req:Request,res:Response){
        try{
            const  rdv_id =  parseInt(req.params.id);
            const  doneby = Number(req.body.doneby);
            const  rdvstate = req.body.rdvstate;
            const email = req.body.email;
            const client = req.body.name;
            await rdv.assign(rdv_id,doneby,rdvstate);
            const agent = await beauty.show( Number(req.body.doneby))
            console.log(agent)
            if(req.body.email){
            await transporter.sendMail({
                        from: process.env.USER_EMAIL,
                        to:email, // list of receivers
                        subject: `Bonjour ${client} Votre rendez-vous est Planifie!!`, 
                        html:`<p>Votre rendez-vous <strong>${req.body.category} </strong>est en cours de traitement.<br/>
                        Votre prestation sera realise par <strong>${agent.bname}</strong>, le <strong>${req.body.date} a ${req.body.heure}</strong>.</p>
                        <p><strong>Merci pour votre confiance!</strong> </p>
                       <p> Pour toute indisposition lors de  la realisation de votre prestation contactez nous aux adresses ci-dessous.</p>`
                    }).catch((err)=>{
                        res.status(400).json({message:"Failed to send email, try again", error:err.message})
                    });
            }
            res.status(200).json({message:`Appointment assigned to ${agent.bname}! and client Notified!`});
        }catch(err:any){
            console.log(err);
            res.status(500).json({mesage:"Failed to send Message"});
        }
    }

    //make paiement 
    async makepaiement(req:Request,res:Response){
        try{
            const  rdv_id =  parseInt(req.params.id);
            const  rdvstate = req.body.rdvstate;
            const  pm = req.body.payment_method;
            const  pdate = new Date().toLocaleDateString();
            const email = req.body.email;
            const client = req.body.client;
            console.log(req.body.link)
            

            await rdv.makepaiement(rdv_id,rdvstate,pm,pdate);
            if(email){
                await transporter.sendMail({
                    from: process.env.USER_EMAIL,
                    to:email, // list of receivers
                    subject: `Mme/Mr ${client} Votre avis nous importe!!`, 
                    html:`Clicquez sur <a href="${req.body.link}">ici</a> pour nous laisser un avis sur votre prestation 
                    du ${req.body.rdvdate} realise par <strong>${req.body.bname} </strong>
                    <p>N'hesitez pas a nous contacter aux addresses ci-dessous.</p>`
                  }).catch((err)=>{
                    res.status(400).json({message:"Failed to send email, try again", error:err.message})
                });;
            }
            res.status(200).json({message:"Payment successfull!"});
        }catch(err:any){
            console.log(err);
            res.status(500).json({message:"Request failed! An error occurred!"});
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
            //res.status(500).json(err);
            res.status(500).json({message:"Internal server error"});
        }
    }

    async state(req:Request,res:Response){
        try{
            const state = parseInt(req.params.state);
            const state_rdv = await rdv.state(state);
            res.status(200).json(state_rdv);
        }catch(err){
            console.log(err);
            //res.status(500).json(err);
            res.status(500).json({message:"Internal server error"});
        }
    }

    async stateCount(req:Request,res:Response){
        try{
            const state = parseInt(req.params.state);
            const state_rdv = await rdv.state(state);
            res.status(200).json(state_rdv);
        }catch(err){
            console.log(err);
            //res.status(500).json(err);
            res.status(500).json({message:"Internal server error"});
        }
    }

    //send review email
    async performanceMetrics(req:Request,res:Response){

        try {
            const metrics = await rdv.metrics();
            res.status(200).json(metrics);
        } catch (err){
            console.log(err);
            res.status(500).json({message:"Internal server error! Try again later"});    
        }

    }

    async rankingMetrics(req:Request,res:Response){
        try {
            const topEarners = await rdv.topEarners();
            res.status(200).json(topEarners);
        } catch(err){
            console.log(err);
            res.status(500).json({message:"Internal server error"})
            
        }
    }

    async topPrestation(req:Request,res:Response){
        try {
            const topPrestation = await rdv.topPrestation();
            res.status(200).json(topPrestation);
            
        } catch(err){
            console.log(err);
            res.status(500).json({message:"Internal server error"});
            
        }

    }

    async delete(req:Request,res:Response){
        try{
            const id = parseInt(req.params.id);
            const del_rdv = await rdv.delete(id);
            res.status(200).json(del_rdv);
        }catch(err){
            console.log(err);
            //res.status(500).json(err);
            res.status(500).json({message:"Internal server error"});
        }
    }
}