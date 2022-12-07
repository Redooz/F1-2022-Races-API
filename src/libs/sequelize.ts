import { Sequelize } from "sequelize";

export const sequelize = new Sequelize({
    host: "localhost",
    username: "root",
    password: "",
    database: "f1",
    dialect: "mysql",
    logging: console.log
})