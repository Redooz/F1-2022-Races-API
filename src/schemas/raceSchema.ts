import Joi from "joi";

const prix = Joi.string();
const fecha = Joi.string();
const ganador = Joi.string();
const equipo = Joi.string();
const vueltas = Joi.number().min(1).max(100);
const tiempo = Joi.string();

export const createRaceSchema = Joi.object({
    prix: prix.required(),
    fecha: fecha.required(),
    ganador: ganador.required(),
    equipo: equipo.required(),
    vueltas: vueltas.required(),
    tiempo: tiempo.required()
});

export const updateRaceSchema = Joi.object({
    prix: prix,
    fecha: fecha,
    ganador: ganador,
    equipo: equipo,
    vueltas: vueltas,
    tiempo: tiempo
});

export const getRaceSchema = Joi.object({
    prix: prix.required(),
});