import { DB } from './levels.js';
export let index;
export const allCells = [];
export const blackCells = new Set();
export const pickedCells = new Set();
index = Math.floor(Math.random() * DB.length);
export const arr = DB[index].arr;
export const gameName = DB[index].name;
export const gameLevel = DB[index].level
export const isSolve = [false];
