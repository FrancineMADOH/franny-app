import express from "express";
import { adminHandler } from "../../handlers/adminHandler";
import verifyToken from "../../middlewares/auth";
import { upload } from "../../middlewares/upload";

const adminRouter = express.Router();
const methods = new adminHandler();

adminRouter.post("",verifyToken ,upload.single("avatar") ,methods.create);
adminRouter.get("",verifyToken,methods.index);
adminRouter.get("/signin",verifyToken , methods.show);
adminRouter.put("/reset",verifyToken,methods.update);
adminRouter.delete("/delete",verifyToken, methods.delete);


export default adminRouter;