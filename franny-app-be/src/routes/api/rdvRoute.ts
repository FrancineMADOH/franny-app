import express from "express";
import { rdvHandler } from "../../handlers/rdvHandler";
import verifyToken from "../../middlewares/auth";

const methods = new rdvHandler();
const rdvRouter = express.Router();

rdvRouter.post("",verifyToken, methods.create);
rdvRouter.get("",verifyToken, methods.index);
rdvRouter.put("update/:id",verifyToken ,methods.update);
rdvRouter.get("/:state",verifyToken, methods.state);
rdvRouter.get("/:state",verifyToken, methods.stateCount);
rdvRouter.put("/:id",verifyToken, methods.delete);

export default rdvRouter;