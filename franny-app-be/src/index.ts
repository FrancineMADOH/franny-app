import path from "path";
import ejs from "ejs";
import express, { Request, Response } from "express";
import bodyParser from "body-parser";
import cors from "cors";
import router from "./routes/indexRoute";


const app:express.Application = express();
const port = 4000;
const domain = "http://localhost:4200";


const corsOptions = {
  origin:domain,
  optionsSuccessStatus:200
};

app.set('view engine', 'html');
app.engine('html', require('ejs').renderFile);
app.use(express.static(path.join(__dirname, "../public/views")));
//console.log(path.join(__dirname, "../public/"))
//app.use(express.urlencoded({ extended: true,}));
app.use(bodyParser.urlencoded({extended:true}));
//app.use(express.json());
app.use(bodyParser.json())
app.use(cors(corsOptions));

//router
app.use("/api", router);




app.get("/", (req: Request, res: Response) => {
  res.render("index.html")
});

app.listen(port, () => {
  console.log("Listening on port " + port);
});

export default app;
