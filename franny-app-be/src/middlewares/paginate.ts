import {Request, Response,NextFunction } from "express";

function paginate(model:any){
    return (req:Request,res:Response,next:NextFunction)=>{

        const page:number = Number(req.query.page);
        const limit:number = Number(req.query.limit);
        const startIndex = (page-1)* limit;
        const endIndex = page * limit;

        const result:any = {};

        if(endIndex<model.length){
            result.next = {
                page:page+1,
                limit: limit 
            };
        }

        if(startIndex>0){
            result.previous  ={
                page: page -1,
                limi:limit
            }
        }

        result.results = model.slice(startIndex, endIndex);
        result.paginatedResult = result;
        next();
    }
}

export default paginate;