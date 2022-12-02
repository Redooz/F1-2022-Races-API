import express from "express";
import { Application } from "express";
import { routerAPI } from "./routes/index.js";
import cors from "cors";

const app: Application = express();
const port: number = 3000;
const corsOptions = {
    origin: "*",
    credentials: true,
    optionSuccessStatus: 200
}

app.use(cors(corsOptions));

routerAPI(app);

app.listen(port, () => {
    console.log(`Server running on ${port}`);
});