import express, { Request, Response } from "express";
import bodyParser from "body-parser";
import cors from "cors";
import router from "./routes/indexRoute";

const app:express.Application = express();
const port = 4000;
const domain = "localhost:4200";

const corsOptions = {
  origin:domain,
  optionsSuccessStatus:200
};

app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());
app.use(cors(corsOptions));
app.use("/api", router);



app.get("/", (req: Request, res: Response) => {
  res.send("Hello Franny");
});

app.listen(port, () => {
  console.log("Listening on port " + port);
});

export default app;
