import express from "express";
import { commentHandler } from "../../handlers/commentHandler";

const commentRouter = express.Router();
const methods =  new commentHandler();

commentRouter.post("", methods.create);
commentRouter.get("", methods.index);
commentRouter.get("/count", methods.count);
commentRouter.delete("",methods.delete);

export default commentRouter;




