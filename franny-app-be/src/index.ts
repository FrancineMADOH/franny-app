import path from "path";
import ejs from "ejs";
import express, { Request, Response } from "express";
import bodyParser from "body-parser";
import cors from "cors";
import router from "./routes/indexRoute";
import dotenv from "dotenv"

dotenv.config();
const environment = String(process.env.ENV);


const app:express.Application = express();
const port = 4000;
let domain:string;
function set_domain(setdom:string){
  if(setdom == 'test'){
    domain = String(process.env.FE_URL_TEST)

  }else if(setdom=='production'){
    domain = String(process.env.FE_URL_PROD)

  }else if(setdom='dev'){
    domain = String(process.env.FE_URL_DEV)

  }
  return domain;
}


const corsOptions = {
  origin:"https://665300e6620e7f4d124d8fba--frannyapp-demo.netlify.app",
  optionsSuccessStatus:200,
  methods: "GET, PUT,POST,PUT,PATCH",
  credentials: true,
};

app.set('view engine', 'html');
app.engine('html', require('ejs').renderFile);
app.use('/public', express.static(path.join('public')));//https://stackoverflow.com/questions/67033797/get-request-for-image-to-angular-component-returns-404-not-found
app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json())

app.use(cors(corsOptions))

app.use(function (req, res, next) {
  res.setHeader('Access-Control-Allow-Origin', "https://665300e6620e7f4d124d8fba--frannyapp-demo.netlify.app");
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
  res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
  next();
});

// app.use(function (req, res, next) {
//   if(environment=='test'){
//   res.setHeader('Access-Control-Allow-Origin',  "*"  );
//   res.setHeader('Access-Control-Allow-Origin', String(process.env.FE_URL_TEST));
//   res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
//   res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');

//   }else if(environment == 'dev'){
//     res.setHeader('Access-Control-Allow-Origin', String(process.env.FE_URL_DEV));
//     res.setHeader('Access-Control-Allow-Origin', String(process.env.FE_URL_DEV));
//     res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
//     res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');

//   }else if(environment == 'production'){
//     res.setHeader('Access-Control-Allow-Origin',String(process.env.FE_URL_PROD));
//     res.setHeader('Access-Control-Allow-Origin', String(process.env.FE_URL_PROD));
//     res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
//     res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
//   }
  
//   next();
// });


//router
app.use("/api", router);

app.get("/", (req: Request, res: Response) => {
  res.send(`<h1 class="text-center">Welcome to franny</h1>`)
});

app.listen(port, () => {
  console.log("Listening on port " + port);
});

export default app;
