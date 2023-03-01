import express from "express";
import { adminHandler } from "../../handlers/adminHandler";

const adminRouter = express.Router();
const methods = new adminHandler();

adminRouter.post("",methods.create);
adminRouter.get("",methods.index);
adminRouter.get("/:email", methods.show);
adminRouter.put("/:email",methods.update);
adminRouter.delete("/:email", methods.delete);


export default adminRouter;