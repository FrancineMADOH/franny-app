import express from "express";
import { postHandler } from "../../handlers/postHandler";
import verifyToken from "../../middlewares/auth";
import { uploadillustration } from "../../middlewares/upload";
const methods = new postHandler();
const postRouter =  express.Router();

postRouter.post("",verifyToken, methods.create);
postRouter.get("",methods.index);
postRouter.get("/topten/:id",methods.topten);
postRouter.get("/topapplause",methods.topapplause);
postRouter.get("/:term", methods.search);
postRouter.get("/category/:category", methods.category);
postRouter.get("/show/:id",methods.show);
postRouter.put("/:id",verifyToken,methods.update);
postRouter.delete("/:id",verifyToken,methods.delete);


export default postRouter;