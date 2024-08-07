import express from "express";
import { NotificationHandler } from "../../handlers/notifHandler";
import verifyToken from "../../middlewares/auth";

const methods = new NotificationHandler();
const notifRouter = express.Router();

notifRouter.post("",verifyToken, methods.create);
notifRouter.get("",verifyToken, methods.index);
notifRouter.get("/new",verifyToken, methods.new);
notifRouter.put("/resolve/",verifyToken, methods.resolve);

export default notifRouter;

