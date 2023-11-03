import express from "express";
import { rdvHandler } from "../../handlers/rdvHandler";
import verifyToken from "../../middlewares/auth";

const methods = new rdvHandler();
const rdvRouter = express.Router();

//public routes
rdvRouter.post("", methods.create);
rdvRouter.put("/payment/:id", methods.makepaiement);

rdvRouter.get("",verifyToken, methods.index);
rdvRouter.put("/update/:id",verifyToken ,methods.update);
rdvRouter.put("/assign/:id",verifyToken ,methods.assign );
rdvRouter.put("/cancel/:id",verifyToken ,methods.cancel);
rdvRouter.get("/view/:id",verifyToken,methods.show);
rdvRouter.get("/:state/count",verifyToken, methods.stateCount);
rdvRouter.put("/delete/:id",verifyToken, methods.delete);
rdvRouter.get("/metrics", verifyToken ,methods.performanceMetrics);

export default rdvRouter;