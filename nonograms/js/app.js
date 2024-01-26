import { countClues } from './countClues.js';
import { arr } from './levels.js';
import { renderMainApp } from './renderMainApp.js';
import '../css/style.css';
import { renderCells } from './renderCells.js';
const clues = countClues(arr);
console.table(arr);
console.table(clues.col);
console.table(clues.row);

renderMainApp(arr);
renderCells(arr);
