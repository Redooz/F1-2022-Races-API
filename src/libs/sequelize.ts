import { Sequelize } from "sequelize";
import { setupModels } from "../db/models/index.js";

export const sequelize = new Sequelize({
    host: "localhost",
    username: "root",
    password: "",
    database: "f1",
    dialect: "mysql",
    logging: console.log
})

setupModels(sequelize);

sequelize.sync();