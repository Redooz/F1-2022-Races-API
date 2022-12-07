import { Model, DataTypes, Sequelize } from 'sequelize';

export const RACE_TABLE: string = "carreras";

export const RaceSchema = {
    prix: {
        allowNull: false,
        primaryKey: true,
        type: DataTypes.STRING
    },
    fecha: {
        allowNull: false,
        type: DataTypes.STRING
    },
    ganador: {
        allowNull: false,
        type: DataTypes.STRING
    },
    equipo: {
        allowNull: false,
        type: DataTypes.STRING
    },
    vueltas: {
        allowNull: false,
        type: DataTypes.INTEGER
    },
    tiempo: {
        allowNull: false,
        type: DataTypes.STRING
    }
};

export class Race extends Model {
    static associate(): void {

    }

    static config(sequelize: Sequelize): { sequelize: Sequelize; tableName: string; modelName: string; timestamps: boolean; } {
        return {
            sequelize,
            tableName: RACE_TABLE,
            modelName: "Race",
            timestamps: false
        }
    }
}