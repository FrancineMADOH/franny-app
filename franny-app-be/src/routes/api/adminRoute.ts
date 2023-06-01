import express from "express";
import { adminHandler } from "../../handlers/adminHandler";
import verifyToken from "../../middlewares/auth";
import { upload } from "../../middlewares/upload";

const adminRouter = express.Router();
const methods = new adminHandler();

adminRouter.post("",methods.create);
adminRouter.get("",verifyToken,methods.index);
adminRouter.post("/signin", methods.show);
adminRouter.put("/reset",verifyToken,methods.update);
adminRouter.delete("/delete",verifyToken, methods.delete);


export default adminRouter;