import express from "express";
import { NotificationHandler } from "../../handlers/notifHandler";
import verifyToken from "../../middlewares/auth";

const methods = new NotificationHandler();
const notifRouter = express.Router();

notifRouter.post("",methods.create);
notifRouter.get("",methods.index);
notifRouter.get("/new",methods.new);
notifRouter.put("/resolve/",methods.resolve);

export default notifRouter;

