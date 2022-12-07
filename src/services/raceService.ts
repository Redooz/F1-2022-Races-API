import { sequelize } from "../libs/sequelize.js";

class RaceService {
    constructor() {}

    async find() {
        const query:string = "SELECT * from carreras";
        const [result] = await sequelize.query(query);

        return result;
    }
    
    async findOne(prix: string){
        const query:string = `SELECT * from carreras where prix = "${prix}"`;
        const [result] = await sequelize.query(query);

        return result;
    }
        
}


export const RacesService = RaceService;