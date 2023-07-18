import express from "express";
import { faqHandler } from "../../handlers/faqHandler";
import verifyToken from "../../middlewares/auth";


const faqRouter = express.Router();
const methods = new faqHandler();

faqRouter.post("",verifyToken,methods.create);
faqRouter.get("",methods.index);
faqRouter.post("/:category",methods.category);
faqRouter.delete("/:id",verifyToken,methods.delete);

export default faqRouter;

