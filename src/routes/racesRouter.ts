import { Router, Request, Response } from 'express';
import {  RacesService } from "../services/raceService";

export const racesRoute = Router();

const service = new RacesService();

racesRoute.get('/', async (req: Request, res: Response) => {
  try {
    const races = await service.find();
    res.json(races);
  } catch (error) {
    console.log(error);
  }
});

racesRoute.get("/:prix",async (req:Request, res: Response) => {
  try {
    const { prix } = req.params;
    const race = await service.findOne(prix);

    res.json(race);
  } catch (error) {
    console.log(error);
  }
});