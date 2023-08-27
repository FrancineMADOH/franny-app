import express from "express";
import { userHandler } from "../../handlers/userHandler";
import verifyToken from "../../middlewares/auth";

const userRouter = express.Router();
const methods  =  new userHandler();

userRouter.post("",methods.create);
userRouter.get("",methods.index);
userRouter.delete("",verifyToken, methods.delete);
userRouter.post("/contact",methods.contactFranny);


export default userRouter;