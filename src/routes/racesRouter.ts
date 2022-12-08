import { Router, Request, Response, NextFunction } from 'express';
import {  RacesService } from "../services/raceService.js";
import { validatorHandler } from "../middlewares/validatorHandler.js";
import { getRaceSchema, createRaceSchema, updateRaceSchema } from "../schemas/raceSchema.js";

export const racesRoute = Router();

const service = new RacesService();

racesRoute.get('/', async (req: Request, res: Response, next: NextFunction) => {
  try {
    const races = await service.find();
    res.json(races);
  } catch (error) {
    next(error);
  }
});

racesRoute.get("/:prix", validatorHandler(getRaceSchema, "params"), async (req:Request, res: Response, next: NextFunction) => {
  try {
    const { prix } = req.params;
    const race = await service.findOne(prix);

    res.json(race);
  } catch (error) {
    next(error);
  }
});

racesRoute.post("/", validatorHandler(createRaceSchema, "body"), async (req:Request, res: Response, next: NextFunction) => {
  try {
    const body = req.body;
    const newRace = await service.create(body);

    res.json(newRace)
  } catch (error) {
    next(error);
  }
});

racesRoute.patch("/:prix", validatorHandler(getRaceSchema, "params"), validatorHandler(updateRaceSchema, "body"),
  async (req:Request, res: Response, next: NextFunction) => {
    try {
      const { prix } = req.params;
      const body = req.body;

      const race = await service.update(prix,body);

      res.json(race);
    } catch (error) {
      next(error);
    }
});

racesRoute.delete("/:prix", async (req:Request, res: Response, next: NextFunction) => {
  try {
    const { prix } = req.params;

    await service.delete(prix);
    res.status(201).json({prix});
  } catch (error) {
    next(error);
  }
});