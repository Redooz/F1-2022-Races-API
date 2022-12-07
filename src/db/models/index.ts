import { Race, RaceSchema } from "./raceModel.js";
import { Sequelize } from 'sequelize';

export function setupModels(sequelize: Sequelize): void {
    Race.init(RaceSchema, Race.config(sequelize));
}