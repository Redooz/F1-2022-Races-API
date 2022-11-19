import express from "express";
import { Application } from "express";
import { routerAPI } from "./routes";

const app: Application = express();
const port: number = 3000;

routerAPI(app);

app.listen(port, () => {
    console.log(`Server running on ${port}`);
});