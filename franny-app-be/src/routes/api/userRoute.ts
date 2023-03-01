import express from "express";
import { userHandler } from "../../handlers/userHandler";

const userRouter = express.Router();
const methods  =  new userHandler();

userRouter.post("",methods.create);
userRouter.get("",methods.index);
userRouter.delete("", methods.delete);

export default userRouter;