import express from "express";
import { presHandler } from "../../handlers/presHandler";
import verifyToken from "../../middlewares/auth";

const presRouter = express.Router();
const methods =  new presHandler();

presRouter.post("",verifyToken, methods.create);
presRouter.get("", methods.index);
presRouter.get("/:id",verifyToken,methods.show)
presRouter.put("/:id",verifyToken, methods.update);

export default presRouter;