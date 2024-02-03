import { DB } from './levels.js';
export let currentIndex;
export const allCells = [];
export const blackCells = new Set();
export const pickedCells = new Set();
currentIndex = [Math.floor(Math.random() * DB.length)];
export const arr = DB[currentIndex].arr;
export const gameName = [DB[currentIndex].name];
export const gameLevel = [DB[currentIndex].level];
export const isSolve = [false];
export const boardIsBlocked = [false];
