import express, {Request, Response} from "express";
import commentRouter from "./api/commentRoute";
import userRouter from "./api/userRoute";

const router = express.Router();

router.get("/", (req:Request, res:Response)=>{
    res.send("Hello main route");
});


router.use("/comments", commentRouter);
router.use("/users", userRouter);

export default router;