import { countClues } from './countClues.js';
import { arr } from './countClues.js';
import { renderMainApp } from './renderMainApp.js';
import '../css/style.css';
const clues = countClues(arr);
console.table(arr);
console.table(clues.col);
console.table(clues.row);

renderMainApp();
