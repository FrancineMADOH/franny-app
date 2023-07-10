import express from "express";
import { beautyHandler } from "../../handlers/beauyHandler";
import verifyToken from "../../middlewares/auth";

const beautyRouter  =  express.Router();
const methods =  new beautyHandler();

beautyRouter.post("",verifyToken, methods.create);
beautyRouter.get("",verifyToken, methods.index);
beautyRouter.get("/:id",verifyToken,methods.show)
beautyRouter.put("/update/:id",verifyToken, methods.update);
beautyRouter.delete("/:id",verifyToken, methods.delete);
//TODO: implement a route for beautifyer deletion


export default beautyRouter;