import express from "express";
import { commentHandler } from "../../handlers/commentHandler";
import verifyToken from "../../middlewares/auth";

const commentRouter = express.Router();
const methods =  new commentHandler();

commentRouter.post("", methods.create);
commentRouter.get("/:id", methods.index);
commentRouter.get("/count", methods.count);
commentRouter.delete("/:id",verifyToken,methods.delete);

export default commentRouter;




