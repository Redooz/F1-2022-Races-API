import { Router, Request, Response } from 'express';

export const racesRoute = Router();

racesRoute.get('/', (req: Request, res: Response) => {
  res.send("Races");
});