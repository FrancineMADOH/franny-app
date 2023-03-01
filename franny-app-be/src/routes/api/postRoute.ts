import express from "express";
import { postHandler } from "../../handlers/postHandler";

const methods = new postHandler();
const postRouter =  express.Router();

postRouter.post("",methods.create);
postRouter.get("",methods.index);
postRouter.get("/topten",methods.topten);
postRouter.get("/topapplause",methods.topapplause);
postRouter.get("/:term", methods.search);
postRouter.get("/:category", methods.category);
postRouter.get("/:id",methods.show);
postRouter.put("/:id",methods.update);
postRouter.delete("/:id",methods.delete);


export default postRouter;