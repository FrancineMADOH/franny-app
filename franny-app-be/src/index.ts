import path from "path";
import ejs from "ejs";
import express, { Request, Response } from "express";
import bodyParser from "body-parser";
import cors from "cors";
import router from "./routes/indexRoute";
import dotenv from "dotenv"

dotenv.config();
const fe_url = process.env.FE__URL


const app:express.Application = express();
const port = 4000;
const domain = fe_url


const corsOptions = {
  origin:domain,
  optionsSuccessStatus:200,
  methods: "GET, PUT,POST,PUT,PATCH"
};

app.set('view engine', 'html');
app.engine('html', require('ejs').renderFile);
app.use('/public', express.static(path.join('public')));//https://stackoverflow.com/questions/67033797/get-request-for-image-to-angular-component-returns-404-not-found
// app.use(express.static(path.join(__dirname, "../public/views")));
//app.use(express.urlencoded({ extended: true,}));
app.use(bodyParser.urlencoded({extended:true}));
//app.use(express.json());
app.use(bodyParser.json())

app.use(cors(corsOptions))


//router
app.use("/api", router);

app.get("/", (req: Request, res: Response) => {
  res.send('Welcome to franny')
});

app.listen(port, () => {
  console.log("Listening on port " + port);
});

export default app;
