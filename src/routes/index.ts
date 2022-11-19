import express, { Router, Application } from "express";

import { defaultRoute } from "./defaultRouter";
import { racesRoute } from "./racesRouter";

export const routerAPI = router;

function router(app: Application) {
    const router:Router = Router();
    
    app.use(defaultRoute);
    
    app.use("/api/v1", router);
        
    router.use("/races", racesRoute);
}