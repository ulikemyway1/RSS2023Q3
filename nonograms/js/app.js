import { arr } from './appState.js';
import { renderMainApp } from './renderMainApp.js';
import '../css/style.css';
import { renderCells } from './renderCells.js';
import { renderClues } from './renderClues.js';
renderMainApp(arr);
renderCells(arr);
renderClues(arr);
