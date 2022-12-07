import { Race } from "../db/models/raceModel.js";
import { sequelize } from "../libs/sequelize.js";

class RaceService {
    constructor() {}

    async create(data):Promise<Race> {
        const newRace = await sequelize.models.Race.create(data);
        return newRace;
    }

    async find():Promise<Array<Race>> {
        const result: Array<Race> = await sequelize.models.Race.findAll();

        return result;
    }
    
    async findOne(prix: string):Promise<Race> {       
        const race:Race = await sequelize.models.Race.findByPk(prix);

        if (!race) {
            // ! 
        }

        return race;
    }

    async update(prix: string, changes) {
        const race:Race = await this.findOne(prix);
        const result = await race.update(changes);

        return result;
    }

    async delete(prix: string){
        const race:Race = await this.findOne(prix);
        await race.destroy();

        return {prix};
    }
}


export const RacesService = RaceService;