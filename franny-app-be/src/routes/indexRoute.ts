import express, {Request, Response} from "express";
import commentRouter from "./api/commentRoute";
import userRouter from "./api/userRoute";
import adminRouter from "./api/adminRoute";
import postRouter from "./api/postRoute";
import faqRouter from "./api/faqRoute";
import beautyRouter from "./api/beautyRoute";
import presRouter from "./api/presRoute";
import rdvRouter from "./api/rdvRoute";
import revRouter from "./api/revRoute";
import notifRouter from "./api/notifRoute";

const router = express.Router();

router.get("/", (req:Request, res:Response)=>{
    res.send("Hello main route");
});


router.use("/comments", commentRouter);
router.use("/users", userRouter);
router.use("/admins",adminRouter);
router.use("/posts",postRouter);
router.use("/faqs", faqRouter);
router.use("/beautifyers", beautyRouter);
router.use("/prestations", presRouter);
router.use("/rendezvous",rdvRouter );
router.use("/reviews", revRouter);
router.use("/notifications", notifRouter);

export default router;