import express from "express";
import { adminHandler } from "../../handlers/adminHandler";
import verifyToken from "../../middlewares/auth";

const adminRouter = express.Router();
const methods = new adminHandler();

adminRouter.post("",verifyToken ,methods.create);
adminRouter.get("",verifyToken,methods.index);
adminRouter.get("/:email",verifyToken , methods.show);
adminRouter.put("/:email",verifyToken,methods.update);
adminRouter.delete("/:email",verifyToken, methods.delete);


export default adminRouter;