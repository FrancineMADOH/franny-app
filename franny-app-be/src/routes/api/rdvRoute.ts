import express from "express";
import { rdvHandler } from "../../handlers/rdvHandler";
import verifyToken from "../../middlewares/auth";

const methods = new rdvHandler();
const rdvRouter = express.Router();

rdvRouter.post("", methods.create);
rdvRouter.get("",verifyToken, methods.index);
rdvRouter.put("/update/:id",verifyToken ,methods.update);
rdvRouter.put("/assign/:id",verifyToken ,methods.assign );
rdvRouter.put("/cancel/:id",verifyToken ,methods.cancel);
rdvRouter.get("/:id",methods.show)
rdvRouter.get("/:state",verifyToken, methods.state);
rdvRouter.get("/:state",verifyToken, methods.stateCount);
rdvRouter.put("/:id",verifyToken, methods.delete);
rdvRouter.put("/payment/:id", methods.makepaiement);
rdvRouter.post("/assign/email", methods.sendAssignationEmail),
rdvRouter.post("/review",methods.sendReviewEmail);

export default rdvRouter;