import express from "express";
import { Application } from "express";
import { routerAPI } from "./routes/index.js";
import cors from "cors";
import { errorHandler, logErrors, boomErrorHandler } from "./middlewares/errorHandler.js";
import ("express-async-errors");

const app: Application = express();
const port: number = 3000;
const corsOptions = {
    origin: "*",
    credentials: true,
    optionSuccessStatus: 200
}

app.use(express.json());
app.use(cors(corsOptions));

routerAPI(app);

app.use(logErrors);
app.use(boomErrorHandler);
app.use(errorHandler);

app.listen(port, () => {
    console.log(`Server running on ${port}`);
});