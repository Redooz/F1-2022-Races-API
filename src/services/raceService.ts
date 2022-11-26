import { pool } from "../libs/mysql";

class RaceService {
    constructor() {}

    async create(data: String) {
        return data;
    }

    async find() {
        const sql = "SELECT * from carreras";
        const [result] = await pool.query(sql);

        return result;
    }
    
    async findOne(prix: string){
        const sql = `SELECT * from carreras where prix = "${prix}"`;
        const [result] = await pool.query(sql);

        return result;
    }
        
}


export const RacesService = RaceService;