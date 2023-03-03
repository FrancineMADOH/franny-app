import express, {Request, Response} from "express";
import commentRouter from "./api/commentRoute";
import userRouter from "./api/userRoute";
import adminRouter from "./api/adminRoute";
import postRouter from "./api/postRoute";

const router = express.Router();

router.get("/", (req:Request, res:Response)=>{
    res.send("Hello main route");
});


router.use("/comments", commentRouter);
router.use("/users", userRouter);
router.use("/admins",adminRouter);
router.use("/posts",postRouter);

export default router;