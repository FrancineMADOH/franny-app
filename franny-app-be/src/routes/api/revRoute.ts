import express from "express";
import { revHandler } from "../../handlers/revHandler";
import verifyToken from "../../middlewares/auth";

const revRouter = express.Router();
const methods =  new revHandler();

revRouter.post("",methods.create);
revRouter.get("", methods.index);
revRouter.get("/:id", verifyToken, methods.show);

export default revRouter;