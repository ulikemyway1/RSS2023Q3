import { DB } from "./levels.js";

export const allCells = [];
export const blackCells = new Set();
export const pickedCells = new Set();
const index = Math.floor(Math.random() * DB.length)
export const arr = DB[index].arr;
export const gameName = DB[index].name;