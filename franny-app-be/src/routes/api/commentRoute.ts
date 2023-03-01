import express from "express";
import { commentHandler } from "../../handlers/commentHandler";
import verifyToken from "../../middlewares/auth";

const commentRouter = express.Router();
const methods =  new commentHandler();

commentRouter.post("", methods.create);
commentRouter.get("", methods.index);
commentRouter.get("/count", methods.count);
commentRouter.delete("",verifyToken,methods.delete);

export default commentRouter;




