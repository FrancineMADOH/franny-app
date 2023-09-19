import path from "path";
import ejs from "ejs";
import express, { Request, Response } from "express";
import bodyParser from "body-parser";
import cors from "cors";
import fileupload from "express-fileupload";
import router from "./routes/indexRoute";

const app:express.Application = express();
const port = 4000;
const domain = "http://localhost:4200";
// const domain = "https://e076-129-0-226-28.ngrok-free.app";


const corsOptions = {
  origin:domain,
  optionsSuccessStatus:200
};

app.set('view engine', 'html');
app.engine('html', require('ejs').renderFile);
app.use(express.static(path.join(__dirname, "../public/views")));
app.use(bodyParser.urlencoded({extended:true}));
app.use(fileupload());
app.use(bodyParser.json());
app.use(cors(corsOptions));

app.use("/api", router);




app.get("/", (req: Request, res: Response) => {
  res.render("index.html")
});

app.listen(port, () => {
  console.log("Listening on port " + port);
});

export default app;
