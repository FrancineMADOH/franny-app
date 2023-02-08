import express, { Request, Response } from "express";
//import bodyParser from "body-parser";

const app = express();
const port = 4000;
//app.use(bodyParser);

app.get("/", (req: Request, res: Response) => {
  res.send("Hello Franny");
});

app.listen(port, () => {
  console.log("Listening on port " + port);
});

export default app;
